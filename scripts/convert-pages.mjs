import fs from 'node:fs';
import path from 'node:path';
import * as cheerio from 'cheerio';

const root = process.cwd();
const appDir = path.join(root, 'app');

// ---- attribute name maps -------------------------------------------------

const ATTR_RENAME = {
  class: 'className',
  for: 'htmlFor',
  tabindex: 'tabIndex',
  readonly: 'readOnly',
  maxlength: 'maxLength',
  minlength: 'minLength',
  autocomplete: 'autoComplete',
  autofocus: 'autoFocus',
  autoplay: 'autoPlay',
  crossorigin: 'crossOrigin',
  contenteditable: 'contentEditable',
  spellcheck: 'spellCheck',
  enctype: 'encType',
  frameborder: 'frameBorder',
  allowfullscreen: 'allowFullScreen',
  srcset: 'srcSet',
  datetime: 'dateTime',
  colspan: 'colSpan',
  rowspan: 'rowSpan',
  usemap: 'useMap',
  cellpadding: 'cellPadding',
  cellspacing: 'cellSpacing',
  novalidate: 'noValidate',
  formaction: 'formAction',
  playsinline: 'playsInline',
  hreflang: 'hrefLang',
  itemscope: 'itemScope',
  itemprop: 'itemProp',
  itemtype: 'itemType',
  fetchpriority: 'fetchPriority',
  viewbox: 'viewBox',
  inputmode: 'inputMode',
  preserveaspectratio: 'preserveAspectRatio',
  strokewidth: 'strokeWidth',
  strokelinecap: 'strokeLinecap',
  strokelinejoin: 'strokeLinejoin',
  fillrule: 'fillRule',
  cliprule: 'clipRule',
};

const EVENT_RENAME = {
  onclick: 'onClick',
  onmouseover: 'onMouseOver',
  onmouseout: 'onMouseOut',
  onmouseenter: 'onMouseEnter',
  onmouseleave: 'onMouseLeave',
  onfocus: 'onFocus',
  onblur: 'onBlur',
  onerror: 'onError',
  onsubmit: 'onSubmit',
  onchange: 'onChange',
  onkeydown: 'onKeyDown',
  onkeyup: 'onKeyUp',
  oninput: 'onInput',
  onload: 'onLoad',
};

const VOID_ELEMENTS = new Set([
  'area',
  'base',
  'br',
  'col',
  'embed',
  'hr',
  'img',
  'input',
  'link',
  'meta',
  'param',
  'source',
  'track',
  'wbr',
]);

const BOOLEAN_ATTRS = new Set([
  'disabled',
  'checked',
  'selected',
  'required',
  'readonly',
  'autofocus',
  'multiple',
  'hidden',
  'novalidate',
  'formnovalidate',
  'autoplay',
  'controls',
  'loop',
  'muted',
  'default',
  'open',
  'async',
  'defer',
]);

let needsFlashSubmit = false;

// ---- helpers --------------------------------------------------------------

function styleStringToObject(str) {
  const out = {};
  str.split(';').forEach((decl) => {
    const idx = decl.indexOf(':');
    if (idx === -1) return;
    const rawProp = decl.slice(0, idx).trim();
    const value = decl.slice(idx + 1).trim();
    if (!rawProp || !value) return;
    let prop = rawProp;
    if (!prop.startsWith('--')) {
      prop = prop.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    }
    out[prop] = value;
  });
  return out;
}

function jsExpr(value) {
  // Safe JS string literal for use inside a JSX expression container.
  return JSON.stringify(value);
}

function transformEventBody(js) {
  // Replace bare `this` with `e.currentTarget` (word boundary safe).
  return js.replace(/\bthis\b/g, 'e.currentTarget');
}

function attrValueToJsx(name, rawValue) {
  if (name === 'style') {
    const obj = styleStringToObject(rawValue);
    const entries = Object.entries(obj)
      .map(
        ([k, v]) => `${/^[a-zA-Z-]+$/.test(k) && !k.startsWith('--') ? k : `'${k}'`}: ${jsExpr(v)}`
      )
      .join(', ');
    return `{{ ${entries} }}`;
  }

  if (name.startsWith('on')) {
    let body = rawValue.trim();
    let handlerBody;

    if (name === 'onsubmit' && body.includes('handleSubmit(')) {
      needsFlashSubmit = true;
      handlerBody =
        "e.preventDefault(); flashSubmit(e.currentTarget.querySelector('.submit-btn'));";
    } else {
      body = body.replace(/^event\.preventDefault\(\);?/, 'e.preventDefault();');
      handlerBody = transformEventBody(body);
    }

    return `{(e) => { ${handlerBody} }}`;
  }

  if (rawValue.includes('"')) {
    return `{${jsExpr(rawValue)}}`;
  }
  return `"${rawValue}"`;
}

function serializeAttrs(attribs) {
  const parts = [];
  for (const [rawName, rawValue] of Object.entries(attribs)) {
    const name = rawName.toLowerCase();
    if (name === 'style' && !rawValue.trim()) continue;

    let jsxName = EVENT_RENAME[name] || ATTR_RENAME[name] || name;

    if (BOOLEAN_ATTRS.has(name) && (rawValue === '' || rawValue === name)) {
      parts.push(jsxName);
      continue;
    }

    if (name.startsWith('data-') || name.startsWith('aria-')) {
      jsxName = name;
    }

    parts.push(`${jsxName}=${attrValueToJsx(name, rawValue)}`);
  }
  return parts.length ? ' ' + parts.join(' ') : '';
}

function escapeJsxText(text) {
  if (/[{}<]/.test(text)) {
    return `{${jsExpr(text)}}`;
  }
  return text;
}

function serializeNode($, node, depth) {
  if (node.type === 'text') {
    const text = node.data;
    if (!text || !text.trim()) {
      return /\n/.test(text || '') ? '' : text;
    }
    return escapeJsxText(text);
  }

  if (node.type === 'comment') {
    return `{/* ${node.data.replace(/\*\//g, '')} */}`;
  }

  if (node.type !== 'tag' && node.type !== 'script' && node.type !== 'style') {
    return '';
  }

  const tagName = node.name;
  if (tagName === 'script') return '';

  const attrs = serializeAttrs(node.attribs || {});

  if (VOID_ELEMENTS.has(tagName)) {
    return `<${tagName}${attrs} />`;
  }

  const children = (node.children || [])
    .map((child) => serializeNode($, child, depth + 1))
    .join('');

  return `<${tagName}${attrs}>${children}</${tagName}>`;
}

function serializeChildren($, node) {
  return (node.children || []).map((c) => serializeNode($, c, 0)).join('\n');
}

// ---- FAQ extraction ---------------------------------------------------

function extractFaqAndReplace($) {
  let faqItems = null;
  $('.faq-item').each((i, el) => {
    const $el = $(el);
    const container = $el.parent();
    if (!faqItems) faqItems = [];
    const q = $el.find('.faq-q').first().clone().find('i').remove().end().text().trim();
    const a = $el.find('.faq-a').first().text().trim();
    faqItems.push({ q, a });
    if (i === 0) {
      $el.before('<div id="__FAQ_PLACEHOLDER__"></div>');
    }
    $el.remove();
  });
  return faqItems;
}

// ---- metadata extraction ----------------------------------------------

function extractMetadata($, routePath) {
  const title = $('head title').text().trim();
  const description = $('head meta[name="description"]').attr('content') || '';
  const keywords = $('head meta[name="keywords"]').attr('content') || '';
  let ldJson = null;
  const ldScript = $('script[type="application/ld+json"]').first().html();
  if (ldScript) {
    try {
      ldJson = JSON.parse(ldScript);
    } catch {
      ldJson = null;
    }
  }
  return { title, description, keywords, ldJson, routePath };
}

// ---- main conversion ----------------------------------------------------

const FILE_TO_ROUTE = (file) => {
  const base = file.replace(/\.html$/, '');
  if (base === 'index') return '';
  return base;
};

function rewriteHref(href) {
  if (!href) return href;
  if (/^(https?:|mailto:|tel:|whatsapp:|#|javascript:)/i.test(href)) return href;
  const m = href.match(/^([\w-]+)\.html(#.*)?$/);
  if (!m) return href;
  const [, name, hash = ''] = m;
  const route = name === 'index' ? '' : name;
  return `/${route}${hash}`;
}

function rewriteInternalUrls($) {
  $('a[href]').each((i, el) => {
    const href = $(el).attr('href');
    const next = rewriteHref(href);
    if (next !== href) $(el).attr('href', next);
  });

  $('[src]').each((i, el) => {
    const src = $(el).attr('src');
    if (src && src.startsWith('images/')) $(el).attr('src', `/${src}`);
  });

  $('[data-image]').each((i, el) => {
    const val = $(el).attr('data-image');
    if (val && val.startsWith('images/')) $(el).attr('data-image', `/${val}`);
  });

  $('[style]').each((i, el) => {
    const style = $(el).attr('style');
    if (style && style.includes('images/')) {
      $(el).attr('style', style.replace(/url\((['"]?)images\//g, 'url($1/images/'));
    }
  });
}

function convertFile(file, { skipFaq = false } = {}) {
  needsFlashSubmit = false;
  const html = fs.readFileSync(path.join(root, file), 'utf8');
  const $ = cheerio.load(html, { decodeEntities: true });

  const route = FILE_TO_ROUTE(file);
  const meta = extractMetadata($, route);

  const body = $('body');
  body.find('header#header').remove();
  body.find('footer').first().remove();
  body.find('.sticky-actions').remove();
  body.find('script').remove();

  rewriteInternalUrls($);

  let faqItems = null;
  if (!skipFaq) {
    faqItems = extractFaqAndReplace($);
  }

  const bodyNode = body.get(0);
  let jsx = serializeChildren($, bodyNode);

  if (faqItems && faqItems.length) {
    const itemsLiteral = JSON.stringify(faqItems);
    jsx = jsx.replace('<div id="__FAQ_PLACEHOLDER__"></div>', `<Faq items={${itemsLiteral}} />`);
  }

  return { jsx, meta, faqItems, needsFlashSubmit };
}

function buildMetadataExport(meta) {
  const canonical = `https://oxfordeducation.com.np/${meta.routePath}`;
  const lines = [];
  lines.push('export const metadata = {');
  lines.push(`  title: ${jsExpr(meta.title)},`);
  if (meta.description) lines.push(`  description: ${jsExpr(meta.description)},`);
  if (meta.keywords) lines.push(`  keywords: ${jsExpr(meta.keywords)},`);
  lines.push(`  alternates: { canonical: '/${meta.routePath}' },`);
  lines.push('  openGraph: {');
  lines.push(`    title: ${jsExpr(meta.title)},`);
  if (meta.description) lines.push(`    description: ${jsExpr(meta.description)},`);
  lines.push(`    url: ${jsExpr(canonical)},`);
  lines.push("    siteName: 'Oxford International Education Centre Nepal',");
  lines.push("    images: ['/images/logo.png'],");
  lines.push("    locale: 'en_US',");
  lines.push("    type: 'website',");
  lines.push('  },');
  lines.push('  twitter: {');
  lines.push("    card: 'summary_large_image',");
  lines.push(`    title: ${jsExpr(meta.title)},`);
  if (meta.description) lines.push(`    description: ${jsExpr(meta.description)},`);
  lines.push("    images: ['/images/logo.png'],");
  lines.push('  },');
  lines.push('};');
  return lines.join('\n');
}

function buildContentFile({ jsx, faqItems, needsFlashSubmit: needsFlash }) {
  const importFaq = faqItems && faqItems.length ? "import Faq from '../components/Faq';\n" : '';
  const importFlash = needsFlash ? "import { flashSubmit } from '../lib/form-utils';\n" : '';

  return `'use client';

${importFaq}${importFlash}import Header from '../components/Header';
import Footer from '../components/Footer';

export default function PageContent() {
  return (
    <>
      <Header />
${jsx}
      <Footer />
    </>
  );
}
`;
}

function buildPageFile({ meta }) {
  const jsonLd = meta.ldJson
    ? `      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ${jsExpr(JSON.stringify(meta.ldJson))} }} />\n`
    : '';

  return `import PageContent from './content';

${buildMetadataExport(meta)}

export default function Page() {
  return (
    <>
${jsonLd}      <PageContent />
    </>
  );
}
`;
}

const GENERIC_FILES = [
  'about.html',
  'blog.html',
  'blog-australia-visa.html',
  'blog-ielts-tips.html',
  'blog-japan-scholarship.html',
  'contact.html',
  'country-australia.html',
  'country-canada.html',
  'country-germany.html',
  'country-japan.html',
  'country-korea.html',
  'country-newzealand.html',
  'country-uk.html',
  'country-usa.html',
  'privacy-policy.html',
  'resource-sop.html',
  'service-computer.html',
  'service-counselling.html',
  'service-language.html',
  'service-test-prep.html',
  'service-tuition.html',
  'service-visa.html',
  'students.html',
  'team.html',
  'terms.html',
];

const files = process.argv.slice(2).length ? process.argv.slice(2) : GENERIC_FILES;

for (const file of files) {
  const result = convertFile(file);
  const route = FILE_TO_ROUTE(file);
  const dir = route ? path.join(appDir, route) : appDir;
  fs.mkdirSync(dir, { recursive: true });

  fs.writeFileSync(path.join(dir, 'page.jsx'), buildPageFile(result), 'utf8');
  fs.writeFileSync(path.join(dir, 'content.jsx'), buildContentFile(result), 'utf8');
  console.log('wrote', path.join(dir, 'page.jsx'), '+ content.jsx');
}
