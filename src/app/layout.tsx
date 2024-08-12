import type { Metadata } from "next";
import '../css/globals.css';

export const metadata: Metadata = {
  title: "portfolio_yurim",
  description: "프론트엔드 개발자 김유림",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
