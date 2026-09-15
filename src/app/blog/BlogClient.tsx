'use client'

import { arrayBlogSchema, arrayBlogType } from "@/src/zod/blogSchema"
import { useEffect, useState } from "react";

interface blogProps {
    data: Promise<any>;
}

export default function BlogClient({ data }: blogProps) {
    const [dataBlog, setDataBlog] = useState<arrayBlogType>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");

    useEffect(() => {
        async function getData() {
            try {
                setLoading(true);
                const parsed = await arrayBlogSchema.parseAsync(data);
                if (!parsed) return;
                setDataBlog(parsed);
            } catch (error: Error | unknown) {
                setError(error instanceof Error ? error.message : String(error));
            } finally {
                setLoading(false);
            }
        };
        getData();
    }, [])
    return (
        <div>Blog</div>
    )
}