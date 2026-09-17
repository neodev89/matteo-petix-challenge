'use client'

import Link from "next/link";
import { useBg } from "../hooks/useCtx";
import { CardsProps } from "./Cards";
import { blogType } from "../zod/blogSchema";

interface detailCardProps {
    dataBlog: blogType;
}

export default function DetailCard({
    dataBlog,
}: detailCardProps) {
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
    // console.log("UPPERCASE BODY: ", upBody);

    return (
        <div className={bg === 'dark' ? "postCardsD" : "postCardsL"}>
            <div className="postSubCard">
                <div className={bg === 'dark' ? "postTitleCardD" : "postTitleCardL"}>
                    <h3 className="text-center text-3xl font-serif">
                        {uppercaseWord}
                    </h3>
                </div>
                <div className={bg === 'dark' ? "postBodyCardD" : "postBodyCardL"}>
                    <div className="postSubBodyCard">
                        <p className={bg === 'dark' ? "text-center text-white font-serif text-lg" : "text-center text-black font-serif text-lg"}>
                            {upBody}
                        </p>
                    </div>
                </div>
                <div className={bg === 'dark' ? "postFooterCardD" : "postFooterCardL"}>
                    <Link href={"/"} className="buttonCard">
                        Indietro
                    </Link>
                </div>
            </div>
        </div>
    )
}