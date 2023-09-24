import './globals.css';
import { noto_sans_kr } from './fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`w-full h-full ${noto_sans_kr.className}`}>
      <body className="w-full h-full scroll overflow-hidden">
        <div className="absolute left-0 top-0 z-50 w-full h-full">
          {children}
        </div>
        <div className="z-0 bg-cover absolute right-0 top-0 w-full h-full scale-110 bg-gradient2 blur-[2px]"></div>
      </body>
    </html>
  );
}
