import './globals.css';
import './src/styles/tailwind.css';
import { Inter } from 'next/font/google';
import { Metadata } from 'next';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: '잇다 - 우리 동네 주부님의 집밥',
  description: '정성 가득 집밥 한 끼',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={inter.variable}>
      <body suppressHydrationWarning>
        <div className="w-full max-w-[744px] min-w-[390px] mx-auto">
          {children}
        </div>
      </body>
    </html>
  );
}
