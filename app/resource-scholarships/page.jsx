import '../../css/style.css';
import '../../css/resources.css';
import '../../css/utilities.css';
import PageContent from './content';

export const metadata = {
  title: 'Scholarships for Nepali Students 2026 | Oxford International Education Centre Nepal',
  description:
    'Browse fully funded and partial scholarships for Nepali students: MEXT (Japan), KGSP (South Korea), Chevening (UK), DAAD (Germany), Australia Awards and more. Updated 2026.',
  alternates: { canonical: '/resource-scholarships' },
  openGraph: {
    title: 'Scholarships for Nepali Students 2026 | Oxford International Education Centre Nepal',
    description:
      'Browse fully funded and partial scholarships for Nepali students: MEXT (Japan), KGSP (South Korea), Chevening (UK), DAAD (Germany), Australia Awards and more. Updated 2026.',
    url: 'https://oxfordeducation.com.np/resource-scholarships',
    siteName: 'Oxford International Education Centre Nepal',
    images: ['/images/logo.png'],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Scholarships for Nepali Students 2026 | Oxford International Education Centre Nepal',
    description:
      'Browse fully funded and partial scholarships for Nepali students: MEXT (Japan), KGSP (South Korea), Chevening (UK), DAAD (Germany), Australia Awards and more. Updated 2026.',
    images: ['/images/logo.png'],
  },
};

export default function Page() {
  return (
    <>
      <PageContent />
    </>
  );
}
