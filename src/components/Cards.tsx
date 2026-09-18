'use client'

import Link from "next/link";
import { blogType } from "../zod/blogSchema"
import { useBg } from "../hooks/useCtx";
import { useState } from "react";

export interface CardsProps {
    dataBlog: blogType;
    id: string;
    isDetails: boolean;
    setLoadingLink: (loadingLink: boolean) => void;
}

export default function Cards({ dataBlog, id, isDetails, setLoadingLink }: CardsProps) {
    console.log(dataBlog);
    const { bg } = useBg();

    const splittedWord = dataBlog.title.split("");
    let uppercaseWord = "";
    uppercaseWord = splittedWord[0].toUpperCase();
    for (let i = 1; i < splittedWord.length; i++) {
        uppercaseWord += splittedWord[i];
    }
    // console.log("UPPERCASE WORD:", uppercaseWord);

    const splittedBody = dataBlog.body.split("");
    let upBody = "";
    upBody = splittedBody[0].toUpperCase();
    for (let i = 1; i < splittedBody.length; i++) {
        upBody += splittedBody[i];
    }

    return (
        <div className={bg === 'dark' ? "cardsD" : "cardsL"}>
            <div className={bg === 'dark' ? "subCardD" : "subCardL"}>
                <div className={bg === 'dark' ? "titleCardD" : "titleCardL"}>
                    <h4 className="text-center text-base font-serif font-black">{uppercaseWord}</h4>
                </div>
                <div className={bg === 'dark' ? "bodyCardD" : "bodyCardL"}>
                    <div className="subBodyCard">
                        <p className={bg === 'dark' ? "text-center text-white text-base font-serif" : "text-center text-black text-lg font-serif"}>
                            {upBody}
                        </p>
                    </div>
                </div>
                <div className={bg === 'dark' ? "footerCardD" : "footerCardL"}>
                    <Link href={isDetails ? `/${id}/blog` : "/"} className="buttonCard" onClick={() => setLoadingLink(true)}>
                        {isDetails ? "Dettaglio" : "Indietro"}
                    </Link>
                </div>
            </div>
        </div>
    )
}