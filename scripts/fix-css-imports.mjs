import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();

// Exact css file combo each legacy page loaded (verified from legacy-html/*.html <head>).
const ROUTE_CSS = {
  '': ['style', 'pages', 'utilities'], // home
  about: ['style', 'utilities'],
  blog: ['style', 'utilities'],
  'blog-australia-visa': ['style', 'utilities'],
  'blog-ielts-tips': ['style', 'utilities'],
  'blog-japan-scholarship': ['style', 'utilities'],
  contact: ['style', 'utilities'],
  'country-australia': ['style', 'country', 'utilities'],
  'country-canada': ['style', 'country', 'utilities'],
  'country-germany': ['style', 'country', 'utilities'],
  'country-japan': ['style', 'country', 'utilities'],
  'country-korea': ['style', 'country', 'utilities'],
  'country-newzealand': ['style', 'country', 'utilities'],
  'country-uk': ['style', 'country', 'utilities'],
  'country-usa': ['style', 'country', 'utilities'],
  gallery: ['style', 'utilities'],
  'privacy-policy': ['style', 'legal', 'utilities'],
  'resource-scholarships': ['style', 'resources', 'utilities'],
  'resource-sop': ['style', 'resources', 'utilities'],
  'resource-visa-checklist': ['style', 'resources', 'utilities'],
  'service-computer': ['style', 'services', 'utilities'],
  'service-counselling': ['style', 'services', 'utilities'],
  'service-language': ['style', 'services', 'utilities'],
  'service-test-prep': ['style', 'services', 'utilities'],
  'service-tuition': ['style', 'services', 'utilities'],
  'service-visa': ['style', 'services', 'utilities'],
  services: ['style', 'utilities'],
  'student-login': ['style', 'student-login', 'utilities'],
  'student-portal': ['student-portal', 'utilities'], // no style.css in original
  students: ['style', 'utilities'],
  team: ['style', 'utilities'],
  terms: ['style', 'legal', 'utilities'],
};

for (const [route, files] of Object.entries(ROUTE_CSS)) {
  const dir = route ? path.join(root, 'app', route) : path.join(root, 'app');
  const pagePath = path.join(dir, 'page.jsx');
  if (!fs.existsSync(pagePath)) {
    console.log('MISSING page.jsx for', route || '(home)');
    continue;
  }
  const depth = route ? '../../' : '../';
  const imports = files.map((f) => `import '${depth}css/${f}.css';`).join('\n');
  let content = fs.readFileSync(pagePath, 'utf8');

  // Strip any previously-injected css imports from this script (idempotent re-run).
  content = content.replace(/import '(\.\.\/)+css\/[a-z-]+\.css';\n/g, '');

  content = content.replace(/^(import PageContent from '\.\/content';)/, `${imports}\n$1`);
  fs.writeFileSync(pagePath, content, 'utf8');
  console.log('updated', pagePath, '->', files.join(', '));
}
