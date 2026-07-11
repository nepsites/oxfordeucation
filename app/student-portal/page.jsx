import { redirect } from 'next/navigation';
import '../../css/student-portal.css';
import '../../css/utilities.css';
import { getCurrentUser } from '../_lib/actions/auth';
import PageContent from './content';

export const metadata = {
  title: 'Student Portal | Oxford International Education Centre',
  description:
    'Oxford International student portal dashboard for application tracking, document management, counsellor messages, and study abroad updates.',
  alternates: { canonical: '/student-portal' },
  openGraph: {
    title: 'Student Portal | Oxford International Education Centre',
    description:
      'Oxford International student portal dashboard for application tracking, document management, counsellor messages, and study abroad updates.',
    url: 'https://oxfordeducation.com.np/student-portal',
    siteName: 'Oxford International Education Centre Nepal',
    images: ['/images/logo.png'],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student Portal | Oxford International Education Centre',
    description:
      'Oxford International student portal dashboard for application tracking, document management, counsellor messages, and study abroad updates.',
    images: ['/images/logo.png'],
  },
};

export default async function Page() {
  const user = await getCurrentUser();

  // Belt-and-braces alongside middleware — never render the dashboard for a
  // signed-out visitor even if middleware is bypassed somehow.
  if (!user) {
    redirect('/student-login');
  }

  return (
    <>
      <PageContent user={user} />
    </>
  );
}
