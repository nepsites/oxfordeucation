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

// Matches the exact block produced by the HTML->JSX converter for each
// university logo <img>, e.g.:
//   <img
//     className="u-img-icon"
//     alt="UoM"
//     decoding="async"
//     loading="lazy"
//     onError={(e) => {
//       e.currentTarget.onerror = null;
//       e.currentTarget.src = 'images/universities/default-education.svg';
//     }}
//     src="/images/universities/unimelb-edu-au.png"
//   />
const IMG_BLOCK = new RegExp(
  '<img\\s*\\n' +
    '\\s*className="u-img-icon"\\s*\\n' +
    '\\s*alt="([^"]*)"\\s*\\n' +
    '\\s*decoding="async"\\s*\\n' +
    '\\s*loading="lazy"\\s*\\n' +
    '\\s*onError=\\{\\(e\\) => \\{\\s*\\n' +
    '\\s*e\\.currentTarget\\.onerror = null;\\s*\\n' +
    "\\s*e\\.currentTarget\\.src = '[^']*';\\s*\\n" +
    '\\s*\\}\\}\\s*\\n' +
    '\\s*src="([^"]*)"\\s*\\n' +
    '\\s*/>',
  'g'
);

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  let count = 0;

  content = content.replace(IMG_BLOCK, (_match, alt, src) => {
    count += 1;
    return `<UniversityLogo className="u-img-icon" alt="${alt}" src="${src}" />`;
  });

  if (count === 0) {
    console.log('NO MATCHES in', file);
    continue;
  }

  if (!content.includes("import UniversityLogo from '../components/UniversityLogo';")) {
    content = content.replace(
      /^(import Header from '\.\.\/components\/Header';)/m,
      "import UniversityLogo from '../components/UniversityLogo';\n$1"
    );
  }

  fs.writeFileSync(file, content, 'utf8');
  console.log('updated', file, '->', count, 'logos converted');
}
