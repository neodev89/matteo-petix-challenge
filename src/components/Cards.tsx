'use client'

import { blogType } from "../zod/blogSchema"

interface CardsProps {
    dataBlog: blogType;
}

export default function Cards({ dataBlog }: CardsProps) {
    console.log(dataBlog)
    return (
        <div className="cards">
            <div className="subCard">
                <div className="titleCard">
                    <p className="text-center">{dataBlog.title}</p>
                </div>
                <div className="bodyCard">
                    <p className="text-center">{dataBlog.body}</p>
                </div>
                <div className="footerCard">
                    
                </div>
            </div>
        </div>
    )
}