'use server'

import PostClient from "./PostClient";

export default async function Post({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        headers: {
            "Content-Type": "application/json",
        },
        cache: "no-store"
    });
    if (!result.ok) return (<p>nessun dato</p>)

    const data = await result.json();

    return <PostClient data={data} />;
}
