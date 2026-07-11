import '../../css/style.css';
import '../../css/services.css';
import '../../css/utilities.css';
import PageContent from './content';

export const metadata = {
  title: 'Free Career Counselling | Oxford International Nepal',
  description:
    'Complete education services: abroad study consultancy, IELTS/TOEFL prep, Japanese/Korean/German language courses, computer training, tuition, and personality development at Sukedhara, Kathmandu.',
  keywords:
    'abroad study consultancy Nepal, IELTS coaching Kathmandu, Japanese language Nepal, computer courses Kathmandu, language classes Nepal, study Australia Nepal',
  alternates: { canonical: '/service-counselling' },
  openGraph: {
    title: 'Free Career Counselling | Oxford International Nepal',
    description:
      'Complete education services: abroad study consultancy, IELTS/TOEFL prep, Japanese/Korean/German language courses, computer training, tuition, and personality development at Sukedhara, Kathmandu.',
    url: 'https://oxfordeducation.com.np/service-counselling',
    siteName: 'Oxford International Education Centre Nepal',
    images: ['/images/logo.png'],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Career Counselling | Oxford International Nepal',
    description:
      'Complete education services: abroad study consultancy, IELTS/TOEFL prep, Japanese/Korean/German language courses, computer training, tuition, and personality development at Sukedhara, Kathmandu.',
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
            '{"@context":"https://schema.org","@type":["Organization","LocalBusiness","EducationalOrganization"],"@id":"https://oxfordeducation.com.np/#organization","name":"Oxford International Education Centre and Consultancy","alternateName":"Oxford International Nepal","url":"https://oxfordeducation.com.np","logo":"https://oxfordeducation.com.np/assets/logo.png","image":"https://oxfordeducation.com.np/assets/logo.png","description":"Nepal\'s trusted education consultancy and academic institute at Sukedhara Chowk, Kathmandu — providing abroad study counselling, language classes, computer courses, IELTS preparation, and tuition since 2015.","foundingDate":"2015","address":{"@type":"PostalAddress","streetAddress":"Sukedhara Chowk","addressLocality":"Kathmandu","addressRegion":"Bagmati Province","addressCountry":"NP"},"geo":{"@type":"GeoCoordinates","latitude":"27.7293","longitude":"85.3468"},"telephone":["+977-9851158991","+977-1-4377050"],"email":"info@oxfordeducation.com.np","openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday"],"opens":"09:00","closes":"17:00"}],"sameAs":["https://www.facebook.com/Oxford-International-Education-Centre-Consultancy-PLtd-1621969181419777/","https://www.youtube.com/watch?v=LZaV-QDBQwQ"],"priceRange":"Free - NPR 50000","currenciesAccepted":"NPR","paymentAccepted":"Cash, Bank Transfer","hasOfferCatalog":{"@type":"OfferCatalog","name":"Education Services","itemListElement":[{"@type":"Offer","itemOffered":{"@type":"Service","name":"Abroad Study Consultancy"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"IELTS Preparation"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Japanese Language Course"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Computer Courses"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Visa Assistance"}}]},"areaServed":{"@type":"Country","name":"Nepal"}}',
        }}
      />
      <PageContent />
    </>
  );
}
