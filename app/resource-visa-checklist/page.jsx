import '../../css/style.css';
import '../../css/resources.css';
import '../../css/utilities.css';
import PageContent from './content';

export const metadata = {
  title: 'Visa Checklist for Nepali Students | Oxford International Education Centre Nepal',
  description:
    'Country-specific student visa document checklists for Australia, UK, USA, Japan, Canada, South Korea and Germany. Free checklist for Nepali students from Oxford International Education Centre.',
  alternates: { canonical: '/resource-visa-checklist' },
  openGraph: {
    title: 'Visa Checklist for Nepali Students | Oxford International Education Centre Nepal',
    description:
      'Country-specific student visa document checklists for Australia, UK, USA, Japan, Canada, South Korea and Germany. Free checklist for Nepali students from Oxford International Education Centre.',
    url: 'https://oxfordeducation.com.np/resource-visa-checklist',
    siteName: 'Oxford International Education Centre Nepal',
    images: ['/images/logo.png'],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Visa Checklist for Nepali Students | Oxford International Education Centre Nepal',
    description:
      'Country-specific student visa document checklists for Australia, UK, USA, Japan, Canada, South Korea and Germany. Free checklist for Nepali students from Oxford International Education Centre.',
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
