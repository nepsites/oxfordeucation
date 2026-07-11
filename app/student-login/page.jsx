import '../../css/style.css';
import '../../css/student-login.css';
import '../../css/utilities.css';
import PageContent from './content';

export const metadata = {
  title: 'Student Portal Login | Oxford International Education Centre Nepal',
  description:
    'Login to your Oxford International student portal — track applications, message your counsellor, manage documents, and get real-time updates.',
  alternates: { canonical: '/student-login' },
  openGraph: {
    title: 'Student Portal Login | Oxford International Education Centre Nepal',
    description:
      'Login to your Oxford International student portal — track applications, message your counsellor, manage documents, and get real-time updates.',
    url: 'https://oxfordeducation.com.np/student-login',
    siteName: 'Oxford International Education Centre Nepal',
    images: ['/images/logo.png'],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student Portal Login | Oxford International Education Centre Nepal',
    description:
      'Login to your Oxford International student portal — track applications, message your counsellor, manage documents, and get real-time updates.',
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
