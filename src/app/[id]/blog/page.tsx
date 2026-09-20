import PostClient from "./PostClient";
import { getData } from "@/src/hooks/getData";
import { Metadata } from "next";
import ErrorPost from "./ErrorPost";

export const metadata: Metadata = {
    title: "Blog article selected by id",
    description: "Blog article selected by ID allow you to study a single post",
    openGraph: {
        url: "http://localhost:3000/:id/blog",
        type: "website",
        images: [
            {
                url: "/og1.png",
                width: 1200,
                height: 630,
                alt: "Immagine del Blog"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        site: "Blog site to consulting latin documents",
        creator: "@creator",
        images: "/og1.png"
    }
}

export default async function Post({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    let jsonLd = {};
    const data = await getData({ params: { id } });
    if (typeof data === "string") return <p>Errore alla chiamata</p>
    if (!data) return <ErrorPost />

    jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: data.title,
        description: data.body,
        author: {
            '@type': 'Person',
        }
    }

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify(jsonLd),
            }} />
            <PostClient data={data} />
        </>
    );
}
