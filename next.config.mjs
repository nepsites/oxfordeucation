import path from 'node:path';
import { fileURLToPath } from 'node:url';

const projectDir = path.dirname(fileURLToPath(import.meta.url));

// The site used to be served as plain .html files. Routes are now clean
// (no extension), so redirect every old filename to its new path — this
// covers old bookmarks, search-engine-indexed URLs, and any external link
// still pointing at the .html version.
const LEGACY_HTML_ROUTES = [
  'index',
  'about',
  'blog',
  'blog-australia-visa',
  'blog-ielts-tips',
  'blog-japan-scholarship',
  'contact',
  'country-australia',
  'country-canada',
  'country-germany',
  'country-japan',
  'country-korea',
  'country-newzealand',
  'country-uk',
  'country-usa',
  'gallery',
  'privacy-policy',
  'resource-scholarships',
  'resource-sop',
  'resource-visa-checklist',
  'service-computer',
  'service-counselling',
  'service-language',
  'service-test-prep',
  'service-tuition',
  'service-visa',
  'services',
  'student-login',
  'student-portal',
  'students',
  'team',
  'terms',
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  turbopack: {
    root: projectDir,
  },
  async redirects() {
    return LEGACY_HTML_ROUTES.map((name) => ({
      source: `/${name}.html`,
      destination: name === 'index' ? '/' : `/${name}`,
      permanent: true,
    }));
  },
};

export default nextConfig;
