import '../../css/style.css';
import '../../css/legal.css';
import '../../css/utilities.css';
import PageContent from './content';

export const metadata = {
  title: 'Terms & Conditions | Oxford International Education Centre Nepal',
  description:
    'Terms and Conditions for using Oxford International Education Centre and Consultancy services. Please read before enrolling or using our website.',
  alternates: { canonical: '/terms' },
  openGraph: {
    title: 'Terms & Conditions | Oxford International Education Centre Nepal',
    description:
      'Terms and Conditions for using Oxford International Education Centre and Consultancy services. Please read before enrolling or using our website.',
    url: 'https://oxfordeducation.com.np/terms',
    siteName: 'Oxford International Education Centre Nepal',
    images: ['/images/logo.png'],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms & Conditions | Oxford International Education Centre Nepal',
    description:
      'Terms and Conditions for using Oxford International Education Centre and Consultancy services. Please read before enrolling or using our website.',
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
            '{"@context":"https://schema.org","@type":"WebPage","name":"Terms and Conditions","url":"https://oxfordeducation.com.np/terms.html","publisher":{"@type":"Organization","name":"Oxford International Education Centre and Consultancy","url":"https://oxfordeducation.com.np"},"dateModified":"2026-06-27","inLanguage":"en-US"}',
        }}
      />
      <PageContent />
    </>
  );
}
