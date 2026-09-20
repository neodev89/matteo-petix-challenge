'use client'

import Link from "next/link";
import CircularProgress from "@mui/material/CircularProgress";
import { blogSchema, blogType } from "../zod/blogSchema"
import { useEffect, useState } from "react";

export interface CardsProps {
    dataBlog: any;
    id: string;
    isDetails: boolean;
}

export default function Cards({ dataBlog, isDetails }: CardsProps) {
    const [blogData, setBlogData] = useState<blogType | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");
    const [uppercaseWord, setUppercaseWord] = useState<string>("");
    const [uppercaseBody, setUppercaseBody] = useState<string>("");

    useEffect(() => {
        async function parsedData() {
            setLoading(true);
            try {
                const parsed = blogSchema.parse(dataBlog);
                if (!parsed) return;
                setBlogData(parsed);
                const splittedWord = parsed.title.split("");
                let upW = splittedWord[0].toUpperCase();
                for (let i = 1; i < splittedWord.length; i++) {
                    upW += splittedWord[i];
                }
                // console.log("UPPERCASE WORD:", uppercaseWord);

                const splittedBody = parsed.body.split("");
                let upBody = "";
                upBody = splittedBody[0].toUpperCase();
                for (let i = 1; i < splittedBody.length; i++) {
                    upBody += splittedBody[i];
                }
                setUppercaseWord(upW);
                setUppercaseBody(upBody);
            } catch (error: Error | unknown) {
                setError(error instanceof Error ? error.message : String(error));
            } finally {
                setLoading(false);
            }
        };
        parsedData();
    }, []);

    return (
        <div className={"cards"}>
            {error ? (<p className="paragraphCard">Errore nel caricamento!</p>) : (<div className={"subCard"}>
                <div className={"titleCard"}>
                    { loading ? (<CircularProgress />) : (<h2 className="titleHCard">
                        {uppercaseWord}
                    </h2>)}
                </div>
                <div className={"bodyCard"}>
                    <div className="subBodyCard">
                        { loading ? (<CircularProgress />) : (
                            <p className={"paragraphCard"}>
                            {uppercaseBody}
                        </p>
                        )}
                    </div>
                </div>
                <div className={"footerCard"}>
                    <Link href={isDetails ? `/${blogData?.id}/blog` : "/"} prefetch={false} className="buttonCard">
                        {isDetails ? "Dettaglio" : "Indietro"}
                    </Link>
                </div>
            </div>)}
        </div>
    )
}