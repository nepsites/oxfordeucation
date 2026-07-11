import '../../css/style.css';
import '../../css/resources.css';
import '../../css/utilities.css';
import PageContent from './content';

export const metadata = {
  title: 'Free SOP Writing Guide | Oxford International Education Centre Nepal',
  description:
    "Download our free Statement of Purpose (SOP) writing guide for Nepali students applying to universities in Australia, UK, USA, Japan, Canada. Step-by-step tips from Nepal's top education consultancy.",
  alternates: { canonical: '/resource-sop' },
  openGraph: {
    title: 'Free SOP Writing Guide | Oxford International Education Centre Nepal',
    description:
      "Download our free Statement of Purpose (SOP) writing guide for Nepali students applying to universities in Australia, UK, USA, Japan, Canada. Step-by-step tips from Nepal's top education consultancy.",
    url: 'https://oxfordeducation.com.np/resource-sop',
    siteName: 'Oxford International Education Centre Nepal',
    images: ['/images/logo.png'],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free SOP Writing Guide | Oxford International Education Centre Nepal',
    description:
      "Download our free Statement of Purpose (SOP) writing guide for Nepali students applying to universities in Australia, UK, USA, Japan, Canada. Step-by-step tips from Nepal's top education consultancy.",
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
