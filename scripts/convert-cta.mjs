import fs from 'node:fs';
import path from 'node:path';
import { globSync } from 'node:fs';

const root = process.cwd();

function findContentFiles(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      out.push(...findContentFiles(full));
    } else if (entry.name === 'content.jsx') {
      out.push(full);
    }
  }
  return out;
}

const files = findContentFiles(path.join(root, 'app'));

const VARIANT_MAP = {
  'btn-white': 'white',
  'btn-ol-primary': 'outline',
};

function normalize(text) {
  return text.replace(/\s+/g, ' ').trim();
}

function jsStringLiteral(str) {
  // Double-quoted JS string literal; escape backslashes/quotes only.
  return '"' + str.replace(/\\/g, '\\\\').replace(/"/g, '\\"') + '"';
}

function extractActions(actionsHtml) {
  const actions = [];
  const anchorRe = /<a\s+([^>]*?)>([\s\S]*?)<\/a>/g;
  let m;
  while ((m = anchorRe.exec(actionsHtml))) {
    const attrsRaw = m[1];
    const inner = m[2];

    const hrefM = attrsRaw.match(/href="([^"]*)"/);
    const classM = attrsRaw.match(/className="btn ([a-z-]+)"/);
    const isExternal = /target="_blank"/.test(attrsRaw);

    const iconM = inner.match(/<i className="([^"]*)"><\/i>/);
    const label = normalize(inner.replace(/<i className="[^"]*"><\/i>/, ''));

    actions.push({
      href: hrefM ? hrefM[1] : '#',
      variant: classM ? VARIANT_MAP[classM[1]] || classM[1] : 'white',
      icon: iconM ? iconM[1] : '',
      label,
      external: isExternal,
    });
  }
  return actions;
}

let totalConverted = 0;

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  const sectionRe = /<section className="cta-section">[\s\S]*?<\/section>/;
  const match = content.match(sectionRe);
  if (!match) continue;

  const block = match[0];
  const h2M = block.match(/<h2>([\s\S]*?)<\/h2>/);
  const pM = block.match(/<p>([\s\S]*?)<\/p>/);
  const actionsM = block.match(/<div className="cta-actions">([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>\s*<\/section>/);

  if (!h2M || !pM || !actionsM) {
    console.log('SKIP (unexpected shape):', file);
    continue;
  }

  const titleRaw = h2M[1];
  const titleHasTags = /<[a-z]/i.test(titleRaw);
  const titleProp = titleHasTags
    ? `title={<>${titleRaw.trim()}</>}`
    : `title=${jsStringLiteral(normalize(titleRaw))}`;

  const textProp = `text=${jsStringLiteral(normalize(pM[1]))}`;

  const actions = extractActions(actionsM[1]);
  const actionsCode = actions
    .map(
      (a) =>
        `{ href: ${jsStringLiteral(a.href)}, icon: ${jsStringLiteral(a.icon)}, label: ${jsStringLiteral(a.label)}, variant: ${jsStringLiteral(a.variant)}${a.external ? ', external: true' : ''} }`
    )
    .join(',\n            ');

  const replacement = `<CtaSection\n        ${titleProp}\n        ${textProp}\n        actions={[\n            ${actionsCode},\n          ]}\n      />`;

  content = content.replace(sectionRe, replacement);

  if (!content.includes("import CtaSection from")) {
    content = content.replace(
      /^(import Header from '(?:\.\.?\/)*components\/Header';)/m,
      `import CtaSection from '${path.relative(path.dirname(file), path.join(root, 'app/components/CtaSection')).replace(/\\/g, '/')}';\n$1`
    );
  }

  fs.writeFileSync(file, content, 'utf8');
  totalConverted += 1;
  console.log('converted', file);
}

console.log(`\nDone. ${totalConverted} files converted.`);
