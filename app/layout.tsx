import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'StreamVault - Your Ultimate Entertainment Hub',
  description: 'Access premium content, exclusive releases, and unlimited streaming with StreamVault.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-background`}>
        <ThemeProvider>
          <div className="relative min-h-screen">
            <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-pink-100/20 via-background to-background -z-10" />
            <Navbar />
            <main className="relative z-10">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}