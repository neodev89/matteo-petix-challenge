'use client'

import Link from "next/link";
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

    console.log(dataBlog);

    useEffect(() => {
        async function parsedData() {
            setLoading(true);
            try {
                const parsed = await blogSchema.parseAsync(dataBlog);
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

    useEffect(() => {
        console.log(blogData);
    }, [blogData]);

    return (
        <div className={"cards"}>
            <div className={"subCard"}>
                <div className={"titleCard"}>
                    <h4 className="text-center text-base font-bold font-serif text-black dark:text-white">{uppercaseWord}</h4>
                </div>
                <div className={"bodyCard"}>
                    <div className="subBodyCard">
                        <p className={"paragraphCard"}>
                            {uppercaseBody}
                        </p>
                    </div>
                </div>
                <div className={"footerCard"}>
                    <Link href={isDetails ? `/${blogData?.id}/blog` : "/"} className="buttonCard">
                        {isDetails ? "Dettaglio" : "Indietro"}
                    </Link>
                </div>
            </div>
        </div>
    )
}