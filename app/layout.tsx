import type { Metadata } from 'next';
import { Geist_Mono, Geist, Fraunces } from 'next/font/google';
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

const fraunces = Fraunces({
  subsets: ['latin'],
  // 1. Critical: Set weight to 'variable' to allow custom axes
  weight: 'variable', 
  variable: '--font-fraunces',
  display: 'swap',
  // 2. Critical: Explicitly include the custom variable axes 
  // (opsz = optical size, SOFT = softness, WONK = wonky/chiseled characters)
  axes: ['opsz'], 
});

export const metadata: Metadata = {
  title: 'InstaRoom — Get your permanent virtual room today',
  description:
    'The telehealth room designed around the clinical relationship—consent,\
     safety, compliance, and getting paid—without extra admin.',
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
      className={`${geist.variable} ${geistMono.variable} ${fraunces.variable} antialiased`}
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
