import '../../css/style.css';
import '../../css/legal.css';
import '../../css/utilities.css';
import PageContent from './content';

export const metadata = {
  title: 'Privacy Policy | Oxford International Education Centre Nepal',
  description:
    'Privacy Policy of Oxford International Education Centre and Consultancy Nepal. Learn how we collect, use, and protect your personal information.',
  alternates: { canonical: '/privacy-policy' },
  openGraph: {
    title: 'Privacy Policy | Oxford International Education Centre Nepal',
    description:
      'Privacy Policy of Oxford International Education Centre and Consultancy Nepal. Learn how we collect, use, and protect your personal information.',
    url: 'https://oxfordeducation.com.np/privacy-policy',
    siteName: 'Oxford International Education Centre Nepal',
    images: ['/images/logo.png'],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | Oxford International Education Centre Nepal',
    description:
      'Privacy Policy of Oxford International Education Centre and Consultancy Nepal. Learn how we collect, use, and protect your personal information.',
    images: ['/images/logo.png'],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            '{"@context":"https://schema.org","@type":"WebPage","name":"Privacy Policy","url":"https://oxfordeducation.com.np/privacy-policy.html","publisher":{"@type":"Organization","name":"Oxford International Education Centre and Consultancy","url":"https://oxfordeducation.com.np"},"dateModified":"2026-06-27","inLanguage":"en-US"}',
        }}
      />
      <PageContent />
    </>
  );
}
