import {Nanum_Gothic as FontSans} from 'next/font/google';
import '../css/globals.css';
import {cn} from '@/lib/utils';
import ClientProviders from "@/provider/ClientProviders";
import {Metadata} from "next";

const fontSans = FontSans({
    weight: ['400', '700', '800'],
    subsets: ['latin'],
    variable: '--font-sans',
});

export const metadata: Metadata = {
    title: "포트폴리오_김유림",
    description: "프론트엔드 개발자 김유림",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={cn(
                'h-screen flex flex-col mx-auto bg-background font-sans overflow-x-hidden',
                fontSans.variable
            )}
        >
        <ClientProviders>
            {children}
        </ClientProviders>
        </body>
        </html>
    );
}
