'use client'

import DetailCard from "@/src/components/DetailsCard";
import { blogSchema, blogType } from "@/src/zod/blogSchema";
import { useEffect, useState } from "react";

interface postClientProps {
    data: blogType;
}

export default function PostClient({ data }: postClientProps) {
    const [postBlog, setPostBlog] = useState<blogType | null>(null)
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");

    useEffect(() => {
        async function addData() {
            try {
                setLoading(true);
                if (data) {
                    const parsed = await blogSchema.parseAsync(data);
                    if (!parsed) return null;
                    setPostBlog(parsed);
                } else {
                    setPostBlog(null);
                }
            } catch (error: Error | unknown) {
                setError(error instanceof Error ? error.message : String(error));
            } finally {
                setLoading(false)
            }
        };
        addData();
    }, []);

    return (
        <div className="detailsCard">
            <>
                {
                    loading ? (
                        <p>Caricamento dati in corso...</p>
                    ) : (
                        error ? (
                            <p>Dati non trovati {error}</p>
                        ) : (
                            postBlog !== null ? (
                                <DetailCard dataBlog={postBlog} />
                            ) : (<p>I dati non ci sono</p>)
                        )
                    )
                }
            </>
        </div>
    )
}