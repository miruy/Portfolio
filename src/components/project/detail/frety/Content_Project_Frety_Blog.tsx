import Link from "next/link";
import {FaLink} from "react-icons/fa";
import React from "react";
import blog_articles from "@/data/blog_articles";

const Content_Project_Frety_Blog = () => {

    const articles = blog_articles.frety

    return (
        <div className="flex flex-col w-full h-fit rounded p-3 sm:p-5">
            <div className="border-b border-zinc-400 text-foreground font-semibold tracking-wider pb-2">
                관련 블로그 정리글과 회고
            </div>

            <div className="pt-5 tracking-wide">
                {articles.map((article, index) =>
                    <div key={index} className="flex items-start text-[15px] leading-7 mx-5 text-zinc-500">
                        <FaLink className="flex-shrink-0 w-4 h-4 mt-1.5 fill-zinc-5000"/>
                        <Link href={article.srs}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="ml-1.5 text-foreground hover:underline">{article.title}</Link>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Content_Project_Frety_Blog;