'use client'

import Link from "next/link";
import { blogType } from "../zod/blogSchema"

interface CardsProps {
    dataBlog: blogType;
    id: string;
    isDetails: boolean;
}

export default function Cards({ dataBlog, id, isDetails }: CardsProps) {
    console.log(dataBlog)
    return (
        <div className="cards">
            <div className="subCard">
                <div className="titleCard">
                    <p className="text-center">{dataBlog.title}</p>
                </div>
                <div className="bodyCard">
                    <div className="subBodyCard">
                        <p className="text-center">{dataBlog.body}</p>
                    </div>
                </div>
                <div className="footerCard">
                    <Link href={isDetails ? `/${id}/blog` : "/"} className="buttonCard">
                        {isDetails ? "Dettaglio" : "Indietro"}
                    </Link>
                </div>
            </div>
        </div>
    )
}