import {Nanum_Gothic as FontSans} from 'next/font/google';
import '../css/globals.css';
import {cn} from '@/lib/utils';
import ClientProviders from "@/provider/ClientProviders";
import {Metadata} from "next";
import SeoHead from "@/components/SeoHead";

const fontSans = FontSans({
    weight: ['400', '700', '800'],
    subsets: ['latin'],
    variable: '--font-sans',
});

export const metadata: Metadata = {
    title: '포트폴리오_김유림',
    description: '프론트엔드 개발자 포트폴리오',
    openGraph: {
        type: 'website',
        url: `https://yurim-portfolio.vercel.app/`,
        siteName: '포트폴리오_김유림',
        title: '포트폴리오_김유림',
        description: '프론트엔드 개발자 포트폴리오',
        locale: 'ko_KR',
        images: [
            {
                url: 'https://api.memocode.dev/memos/1ce6d122-d9a7-49db-9c16-037f61b2e7de/images/3cbb4ef3-8aa6-4154-bc6f-ddd1c7b1eb12.png',
                alt: 'portfolio_image',
            },
        ],
    },
    icons: {
        icon: [
            {url: 'https://yurim-portfolio.vercel.app/favicon.ico', type: 'image/x-icon'},
        ]
    }
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'website',
    'name': '포트폴리오_김유림',
    'description': '프론트엔드 개발자 포트폴리오',
    'url': 'https://yurim-portfolio.vercel.app',
    'image': {
        '@type': 'websiteImage',
        'url': 'https://api.memocode.dev/memos/1ce6d122-d9a7-49db-9c16-037f61b2e7de/images/3cbb4ef3-8aa6-4154-bc6f-ddd1c7b1eb12.png',
        'alt': 'portfolio_image',
    },
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
            <SeoHead
                title={jsonLd.name}
                description={jsonLd.description}
                ogTitle={jsonLd.name}
                ogDescription={jsonLd.description}
                ogType="website"
                ogUrl={jsonLd.url}
                ogImage={jsonLd.image.url}
            />
            {children}
        </ClientProviders>
        </body>
        </html>
    );
}
