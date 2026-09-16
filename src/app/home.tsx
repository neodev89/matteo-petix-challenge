'use client'
import "./globals.css";

import { useGetParsedZod } from "../tanstack/get";
import { arrayBlogSchema, blogSchema } from "../zod/blogSchema";
import Cards from "../components/Cards";
import Image from "next/image";
import { useState } from "react";
import { useBg } from "../hooks/useCtx";

export default function HomeClient() {
    const { data: dataBlog, isLoading, isFetching, error } = useGetParsedZod({
        key: ["get-blogs"],
        url: "https://jsonplaceholder.typicode.com/posts",
        enabled: true,
        schema: arrayBlogSchema,
    });

    console.log(dataBlog);
    const { toggleBg } = useBg();

    return (
        <div className="relative flex flex-1 w-full bg-black p-3">
            <div className="relative flex flex-1 flex-col border border-purple-500 rounded-2xl w-full p-1 gap-y-2">
                <div className="relative flex flex-col items-center h-1/5 w-full border border-white rounded-2xl">
                    <div className="relative flex flex-row h-1/4 w-full justify-center 
                    items-center bg-clip-text text-transparent">
                        <h1 className="font-extrabold text-3xl bg-transparent
                            bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXfTJRwk567zjksXDu-QZhDHEbQ0PHI6A_A2EqIBidwQ&s=10')]
                            object-cover object-center
                            bg-cover bg-center 
                            bg-clip-text text-transparent">
                            BLOG DI TUTTI GLI ARTICOLI PER I SAGGI IN LATINO
                        </h1>
                    </div>
                    <div className="relative flex flex-row h-2/4 w-full justify-center items-center">
                        <h3>Il tuo Blog dove puoi visualizzare tutti gli articoli che sono stati pubblicati</h3>
                    </div>
                    <div className="relative flex flex-row h-1/4 w-full justify-center items-center">
                        <button type="button" onClick={toggleBg}>
                            Sfondo
                        </button>
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
                                        <Cards key={el.id} dataBlog={el} id={String(el.id)} isDetails={true} />
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