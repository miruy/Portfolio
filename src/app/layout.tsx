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
    keywords: ["프론트엔드", "포트폴리오", "노션아바타"],
    openGraph: {
        type: 'website',
        url: `https://yurim-portfolio.vercel.app/`,
        siteName: '포트폴리오_김유림',
        title: '포트폴리오_김유림',
        description: '프론트엔드 개발자 포트폴리오',
        locale: 'ko_KR',
        images: [
            {
                url: 'https://yurim-portfolio.vercel.app/favicon_187x206.png',
                width: 800,
                height: 600,
                alt: 'portfolio_image',
            },
        ],
    },
    alternates: {
        canonical: `https://yurim-portfolio.vercel.app`,
        languages: {
            'ko-KR': `https://yurim-portfolio.vercel.app`
        },
    },
    icons: {
        icon: [
            {url: 'https://yurim-portfolio.vercel.app/favicon.ico', type: 'image/x-icon'},
            {url: 'https://yurim-portfolio.vercel.app/favicon_187x206.png', sizes: '187x206', type: 'image/png'},
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
        'url': 'https://yurim-portfolio.vercel.app/favicon_187x206.png',
        'width': 800,
        'height': 600,
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
                ogImageAlt={jsonLd.image.alt}
                jsonLd={jsonLd}
            />

            {children}
        </ClientProviders>
        </body>
        </html>
    );
}
