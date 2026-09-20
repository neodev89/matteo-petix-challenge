'use client'

import Link from "next/link";

import { blogSchema, blogType } from "../zod/blogSchema";
import { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";

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
                    const parsed = blogSchema.parse(dataBlog);
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
        <div className="postCardsScreen">
            {
                error ? (
                    <p className="paragraphCard">Errore nel caricamento</p>
                ) : (
                    <div className="postSubCard">
                        <div className="postTitleCard">
                            {loading ? (<CircularProgress />) : (<h1 className="postTitleHCard">
                                {uppercaseWord}
                            </h1>)}
                        </div>
                        <div className="postBodyCard">
                            {loading ? (<CircularProgress />) : (<div className="postSubBodyCard">
                                <p className="paragraphHDetailCard">
                                    {uppercaseBody}
                                </p>
                            </div>)}
                        </div>
                        <div className="footerCard">
                            <Link href={"/"} prefetch={false} className="buttonCard">
                                Indietro
                            </Link>
                        </div>
                    </div>
                )
            }
        </div>
    )
}