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

const CARD_RE =
  /<a\s+className="u-txt-inherit uni-card"\s+href="([^"]*)"\s+rel="noopener noreferrer"\s+target="_blank"\s*>\s*<div className="u-card-p22 uni-logo">\s*<UniversityLogo\s+className="u-img-icon"\s+alt="([^"]*)"\s+src="([^"]*)"\s*\/>\s*<\/div>\s*<div>\s*<div className="uni-name">([\s\S]*?)<\/div>\s*<div className="uni-rank">([\s\S]*?)<\/div>\s*<\/div>\s*<\/a>/g;

const GRID_RE = /<div className="u-grid-3 uni-grid">([\s\S]*?)<\/div>\s*<\/section>/;

let totalFiles = 0;
let totalCards = 0;

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  const gridMatch = content.match(GRID_RE);
  if (!gridMatch) {
    console.log('SKIP (no uni-grid found):', file);
    continue;
  }

  const gridInner = gridMatch[1];
  const cards = [];
  let m;
  CARD_RE.lastIndex = 0;
  while ((m = CARD_RE.exec(gridInner))) {
    cards.push({
      href: m[1],
      abbr: m[2],
      logo: m[3],
      name: m[4].trim(),
      rank: m[5].trim(),
    });
  }

  if (cards.length === 0) {
    console.log('SKIP (regex matched 0 cards):', file);
    continue;
  }

  const arrLines = cards
    .map(
      (c) =>
        `  { href: ${jsStringLiteral(c.href)}, abbr: ${jsStringLiteral(c.abbr)}, logo: ${jsStringLiteral(c.logo)}, name: ${jsStringLiteral(c.name)}, rank: ${jsStringLiteral(c.rank)} },`
    )
    .join('\n');

  const arrayDecl = `const UNIVERSITIES = [\n${arrLines}\n];\n\n`;

  // Insert the data array right before the component function.
  content = content.replace(/^(export default function PageContent)/m, `${arrayDecl}$1`);

  // Replace the whole grid block with a map over UNIVERSITIES.
  const replacement = `<div className="u-grid-3 uni-grid">\n            {UNIVERSITIES.map((u) => (\n              <UniCard key={u.name} {...u} />\n            ))}\n          </div>\n        </section>`;
  content = content.replace(GRID_RE, replacement);

  if (!content.includes("import UniCard from")) {
    content = content.replace(
      /^(import UniversityLogo from '\.\.\/components\/UniversityLogo';)/m,
      "import UniCard from '../components/UniCard';\n$1"
    );
  }

  fs.writeFileSync(file, content, 'utf8');
  totalFiles += 1;
  totalCards += cards.length;
  console.log(`converted ${file} -> ${cards.length} cards`);
}

console.log(`\nDone. ${totalFiles} files, ${totalCards} cards total.`);
