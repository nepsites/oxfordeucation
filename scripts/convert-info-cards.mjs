import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const files = [
  'country-australia',
  'country-canada',
  'country-germany',
  'country-japan',
  'country-korea',
  'country-newzealand',
  'country-uk',
  'country-usa',
].map((r) => path.join(root, 'app', r, 'content.jsx'));

function jsStringLiteral(str) {
  return '"' + str.replace(/\\/g, '\\\\').replace(/"/g, '\\"') + '"';
}

// Matches the "Why Study X" wrapper: a u-flex-col div containing exactly a
// run of info-card blocks (icon-box + h4 + p), nothing else.
const WRAP_RE = /<div className="u-flex-col">((?:\s*<div className="info-card">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*)+)<\/div>/;

const CARD_RE =
  /<div className="info-card">\s*<div className="u-flex-start14">\s*<div className="icon-box icon-([a-z]+)">\s*<i className="([^"]*)"><\/i>\s*<\/div>\s*<div>\s*<h4 className="u-h1-primary">([\s\S]*?)<\/h4>\s*<p className="u-txt-sm-555c">([\s\S]*?)<\/p>\s*<\/div>\s*<\/div>\s*<\/div>/g;

let totalFiles = 0;
let totalCards = 0;

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  const wrapMatch = content.match(WRAP_RE);
  if (!wrapMatch) {
    console.log('SKIP (no info-card wrapper found):', file);
    continue;
  }

  const inner = wrapMatch[1];
  const cards = [];
  let m;
  CARD_RE.lastIndex = 0;
  while ((m = CARD_RE.exec(inner))) {
    cards.push({
      iconVariant: m[1],
      icon: m[2],
      title: m[3].replace(/\s+/g, ' ').trim(),
      text: m[4].replace(/\s+/g, ' ').trim(),
    });
  }

  if (cards.length === 0) {
    console.log('SKIP (regex matched 0 cards):', file);
    continue;
  }

  const arrLines = cards
    .map(
      (c) =>
        `  { icon: ${jsStringLiteral(c.icon)}, iconVariant: ${jsStringLiteral(c.iconVariant)}, title: ${jsStringLiteral(c.title)}, text: ${jsStringLiteral(c.text)} },`
    )
    .join('\n');

  const arrayDecl = `const WHY_REASONS = [\n${arrLines}\n];\n\n`;

  content = content.replace(/^(export default function PageContent)/m, `${arrayDecl}$1`);

  const replacement = `<div className="u-flex-col">\n                {WHY_REASONS.map((r) => (\n                  <InfoCard key={r.title} {...r} />\n                ))}\n              </div>`;
  content = content.replace(WRAP_RE, replacement);

  if (!content.includes("import InfoCard from")) {
    content = content.replace(
      /^(import UniCard from '\.\.\/components\/UniCard';)/m,
      "import InfoCard from '../components/InfoCard';\n$1"
    );
  }

  fs.writeFileSync(file, content, 'utf8');
  totalFiles += 1;
  totalCards += cards.length;
  console.log(`converted ${file} -> ${cards.length} cards`);
}

console.log(`\nDone. ${totalFiles} files, ${totalCards} cards total.`);
