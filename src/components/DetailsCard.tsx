'use client'

import Link from "next/link";
import { useBg } from "../hooks/useCtx";
import { CardsProps } from "./Cards";
import { blogSchema, blogType } from "../zod/blogSchema";
import { useEffect, useState } from "react";
import IconToggle from "./iconToggle";

interface detailCardProps {
    dataBlog: any;
}

export default function DetailCard({
    dataBlog,
}: detailCardProps) {
    const [postBlog, setPostBlog] = useState<blogType | null>(null)
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");
    const [uppercaseWord, setUppercaseWord] = useState<string>("");
    const [uppercaseBody, setUppercaseBody] = useState<string>("");


    useEffect(() => {
        async function addData() {
            try {
                setLoading(true);
                if (dataBlog) {
                    const parsed = await blogSchema.parseAsync(dataBlog);
                    if (!parsed) return null;
                    setPostBlog(parsed);
                    const splittedWord = dataBlog.title.split("");
                    let upW = "";
                    upW = splittedWord[0].toUpperCase();
                    for (let i = 1; i < splittedWord.length; i++) {
                        upW += splittedWord[i];
                    }
                    // console.log("UPPERCASE WORD:", uppercaseWord);

                    const splittedBody = dataBlog.body.split("");
                    let upBody = "";
                    upBody = splittedBody[0].toUpperCase();
                    for (let i = 1; i < splittedBody.length; i++) {
                        upBody += splittedBody[i];
                    }
                    setUppercaseWord(upW);
                    setUppercaseBody(upBody);
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

    // console.log("UPPERCASE BODY: ", upBody);

    return (
        <>
            {
                loading ? (
                    <p className="paragraphCard">Attendere mentre carico i dati...</p>
                ) : (
                    error ? (
                        <p className="paragraphCard">Errore nel caricamento</p>
                    ) : (
                        <div className="postCards">
                            <div className="postSubCard">
                                <div className="postTitleCard">
                                    <h1 className="text-center text-3xl font-serif">
                                        {uppercaseWord}
                                    </h1>
                                </div>
                                <div className="postBodyCard">
                                    <div className="postSubBodyCard">
                                        <p className="text-center text-black dark:text-white font-serif text-lg">
                                            {uppercaseBody}
                                        </p>
                                    </div>
                                </div>
                                <div className="footerCard">
                                    <Link href={"/"} className="buttonCard">
                                        Indietro
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                )
            }
        </>
    )
}