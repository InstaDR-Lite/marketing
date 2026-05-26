import type { Metadata } from 'next';
import { Syne, DM_Sans, DM_Mono } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';
import '../styles/globals.scss';

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'InstaDR-Lite — On-Demand Medical Consultations. Instantly.',
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
    title: 'InstaDR-Lite — Telehealth Built for Independent Practitioners',
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
      className={`${syne.variable} ${dmSans.variable} ${dmMono.variable}`}
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
