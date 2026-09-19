'use client'

import DetailCard from "@/src/components/DetailsCard";
import IconToggle from "@/src/components/iconToggle";
import { blogType } from "@/src/zod/blogSchema";

interface postClientProps {
    data: blogType;
}

export default function PostClient({ data }: postClientProps) {
    return (
        <div className="detailsCard">
            <div className="wrappedDetailIconBtn">
            <IconToggle />
            </div>
            <div className="wrappedDetailCard">
                {
                data !== null ? (
                    <DetailCard dataBlog={data} />
                ) : (<p>I dati non ci sono</p>)
            }
            </div>
        </div>
    )
}