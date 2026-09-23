import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'Elegant Banquets Juhu | Luxury Banquet Hall in Juhu, Mumbai',
  description: 'Located on Juhu Tara Road at Bloom Hotel, Elegant Banquets Juhu features a spacious AC hall with 300 seated / 500 floating capacity. Multi-cuisine gourmet catering including Jain food for Weddings, Haldi, Mehendi, Cocktail Parties, Corporate & Birthday Parties. Call 098335 57900.',
  openGraph: {
    title: 'Elegant Banquets Juhu | Luxury Banquet Hall in Juhu, Mumbai',
    description: 'Located on Juhu Tara Road at Bloom Hotel, Elegant Banquets Juhu features a spacious AC hall with 300 seated / 500 floating capacity. Multi-cuisine catering including Jain food. Call 098335 57900.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elegant Banquets Juhu | Luxury Banquet Hall in Juhu, Mumbai',
    description: 'Located on Juhu Tara Road at Bloom Hotel, Elegant Banquets Juhu features a spacious AC hall with 300 seated / 500 floating capacity. Multi-cuisine catering including Jain food. Call 098335 57900.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
