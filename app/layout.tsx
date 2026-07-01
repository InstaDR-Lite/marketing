import type { Metadata } from 'next';
import { Geist_Mono, Geist } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';
import '../styles/globals.scss';

const geist = Geist({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-geist',
  display: 'swap',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-geist-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'InstaRoom — Get your permanent virtual room today',
  description:
    'Connect with your patients in under 2 minutes. No app downloads required. Fully native web telehealth optimized for clinical performance.',
  keywords: [
    'telehealth',
    'telemedicine',
    'virtual consultations',
    'doxy.me alternative',
    'clinical video',
    'HIPAA telehealth',
  ],
  openGraph: {
    title: 'InstaRoom — Get your permanent virtual room today',
    description:
      'Sub-45ms video. Direct Stripe payouts. Permanent room link. Zero cuts.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${geistMono.variable}`}
    >
      <body>
        <ThemeProvider>
          <div className="noise-overlay" aria-hidden="true" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
