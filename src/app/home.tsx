'use client'
import "./globals.css";

import Link from "next/link"
import { useGetParsedZod } from "../tanstack/get";
import { arrayBlogSchema, blogSchema } from "../zod/blogSchema";
import Cards from "../components/Cards";

export default function HomeClient() {
    const { data: dataBlog, isLoading, isFetching, error } = useGetParsedZod({
        key: ["get-blogs"],
        url: "https://jsonplaceholder.typicode.com/posts",
        enabled: true,
        schema: arrayBlogSchema,
    });

    console.log(dataBlog);

    return (
        <div className="relative flex flex-1 w-full bg-black p-3">
            <div className="relative flex flex-1 flex-col border border-purple-500 rounded-2xl w-full p-1 gap-y-2">
                <div className="relative flex flex-col items-center h-1/5 w-full border border-white rounded-2xl">
                    <div className="relative flex flex-row border h-1/3 w-full justify-center items-center">
                        <h1>BLOG DI TUTTI GLI ARTICOLI</h1>
                    </div>
                    <div className="relative flex flex-row border h-2/3 w-full justify-center items-center">
                        <h3>Il tuo Blog dove puoi visualizzare tutti gli articoli che sono stati pubblicati</h3>
                    </div>
                </div>
                <div className="relative flex flex-row p-2 justify-center items-center h-4/5 w-full border border-white rounded-2xl">
                    <div className="relative flex flex-row flex-wrap justify-between gap-y-2 p-2 h-120 w-full overflow-x-hidden overflow-y-auto">
                        {
                            isLoading || isFetching ? (
                                <p>Dati in caricamento...</p>
                            ) : (
                                error ? (
                                    <p>Errore di caricamento</p>
                                ) : (
                                    dataBlog?.map((el) => (
                                        <Cards key={el.id} dataBlog={el} />
                                    ))
                                )
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}