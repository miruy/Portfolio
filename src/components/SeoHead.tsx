import Head from "next/head";
import React from "react";

interface SeoHeadProps {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
    ogType: string;
    ogUrl: string;
    ogImage: string;
}

const SeoHead = ({
                     title,
                     description,
                     ogTitle,
                     ogDescription,
                     ogType,
                     ogUrl,
                     ogImage,
                 }: SeoHeadProps) => {
    return (
        <Head>
            <meta property="title" content={title}/>
            <meta property="description" content={description}/>
            <meta property="og:title" content={ogTitle}/>
            <meta property="og:description" content={ogDescription}/>
            <meta property="og:image" content={ogImage}/>
            <meta property="og:url" content={ogUrl}/>
            <meta property="og:type" content={ogType}/>
        </Head>

    )
}

export default SeoHead;