import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata = {
  metadataBase: new URL(process.env.SITE_URL || (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 'http://localhost:3000')),
  title: { default: 'Karthik Shakyawar | Frontend Developer', template: '%s | Karthik Shakyawar' },
  description: 'Frontend developer building thoughtful websites with React, Next.js, and Tailwind CSS. Explore my projects, skills, and experiments.',
  authors: [{ name: 'Karthik Shakyawar' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    title: 'Karthik Shakyawar | Frontend Developer',
    description: 'Thoughtful interfaces. Practical code. Explore my selected work and get in touch.',
    images: [{ url: '/Site%20portfolio%20pic.png', width: 605, height: 721, alt: 'Karthik Shakyawar' }],
  },
  twitter: {
    card: 'summary',
    title: 'Karthik Shakyawar | Frontend Developer',
    description: 'Thoughtful websites, frontend projects, and experiments by Karthik Shakyawar.',
    images: ['/Site%20portfolio%20pic.png'],
  },
  icons: { icon: '/favicon.ico' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Header />
        <main id="main-content" tabIndex={-1}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
