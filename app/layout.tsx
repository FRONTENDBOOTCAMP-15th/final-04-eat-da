import './globals.css';
import './src/styles/tailwind.css';
import { Inter } from 'next/font/google';
import PickupAlarmProvider from '@/app/src/components/common/PickupAlarmProvider';
import GlobalToastProvider from '@/app/src/components/common/GlobalToastProvider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={inter.variable}>
      <body suppressHydrationWarning>
        <PickupAlarmProvider />
        <GlobalToastProvider />
        <div className="w-full max-w-[744px] min-w-[390px] mx-auto">
          {children}
        </div>
      </body>
    </html>
  );
}
