'use server'

import BlogClient from "./BlogClient"

export default async function Blog() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        headers: {
            "Content-Type": "application/json",
        },
        cache: "reload",
    });
    if (!res.ok) return (
        <div>nessun dato da API</div>
    );
    const result = res.json();
    
    return (
        <BlogClient data={result} />
    )
}