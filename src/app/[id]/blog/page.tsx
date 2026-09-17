'use server'

import { blogSchema, blogType } from "@/src/zod/blogSchema";
import PostClient from "./PostClient";
import { getData } from "@/src/hooks/getData";

export async function generateMetadata(
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;

    const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        headers: {
            "Content-Type": "application/json",
        },
        cache: "no-store"
    });
    if (!result.ok) return;

    const data = await result.json();
    const parsed = blogSchema.safeParse(result);

    if (!parsed.success) {
        return {
            title: "Articolo non trovato",
            description: "Il contenuto richiesto non esiste."
        };
    }
    const blog = parsed.data;
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: blog.title,
        description: blog.body,
        author: {
            '@type': 'Person',
        }
    };
    return jsonLd;
}

export default async function Post({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    let jsonLd = {};
    const data = await getData({ params: { id } });
    if (typeof data === "string") return <p>Errore alla chiamata</p>
    if (!data) return <p>nessun dato disponibile</p>

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
