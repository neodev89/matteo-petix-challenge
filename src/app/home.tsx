'use client'
import "./globals.css";

import Cards from "../components/Cards";
import CircularProgress from '@mui/material/CircularProgress';
import IconButton from "@mui/material/IconButton";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useGetParsedZod } from "../tanstack/get";
import { arrayBlogSchema, blogSchema } from "../zod/blogSchema";
import { useBg } from "../hooks/useCtx";
import { useState } from "react";
import Image from "next/image";

export default function HomeClient() {
    const { data: dataBlog, isLoading, isFetching, error } = useGetParsedZod({
        key: ["get-blogs"],
        url: "https://jsonplaceholder.typicode.com/posts",
        enabled: true,
        schema: arrayBlogSchema,
    });

    const { bg, toggleBg } = useBg();
    const darkMod = "relative flex flex-1 h-dvh w-full bg-black p-3";
    const lightMod = "relative flex flex-1 h-dvh w-full bg-white p-3";
    const [loadingLink, setLoadingLink] = useState<boolean>(false);

    return (
        <div className={`${bg === 'dark' ? darkMod : lightMod}`}>
            <Image 
                src={bg === 'dark' ? "https://png.pngtree.com/thumb_back/fh260/background/20240104/pngtree-mystic-blackberry-a-textured-design-on-an-abstract-dark-purple-background-image_13879614.png" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ06R0MuBxCafDIfD3FfgEE6h8lI2DoVhL19zw8s9DNLw&s=10"}
                alt={"sfondo viole per il blog"}
                fill
                preload
                loading={"eager"}
                unoptimized
                quality={80}
                style={{
                    objectFit: 'cover',
                    objectPosition: 'center',
                }}
            />
            {loadingLink ? (
                <>
                    <CircularProgress />
                    <p className={bg === 'dark' ? "text-white font-bold text-3xl" : "text-black font-bold text-3xl"}>Attendere...</p>
                </>
            ) : (
                <div className="relative flex flex-1 flex-col rounded-2xl w-full p-1 gap-y-2">
                    <div className={bg === 'dark' ? "relative flex flex-col items-center h-1/5 w-full border-2 border-white/50 rounded-2xl py-2" : "relative flex flex-col items-center h-1/5 w-full border-4 border-double border-purple-800/30 rounded-2xl py-2"}>
                        <div className="relative flex flex-row h-1/3 w-full justify-center items-center bg-clip-text text-transparent">
                            <h1 className={bg === 'dark' ? `font-extrabold text-3xl text-white` : `font-extrabold text-3xl text-black`}>
                                BLOG DI TUTTI GLI ARTICOLI PER I SAGGI IN LATINO
                            </h1>
                        </div>
                        <div className="relative flex flex-row h-1/3 w-full justify-center items-center">
                            <h2 className={bg === 'dark' ? "text-white text-lg" : "text-black"}>Il tuo Blog dove puoi visualizzare tutti gli articoli che sono stati pubblicati</h2>
                        </div>
                        <div className="relative flex flex-row h-1/3 w-full justify-center items-center">
                            <IconButton 
                                type="button" 
                                size="medium"
                                onClick={toggleBg}
                            >
                                <span className={bg === 'dark' ? 'text-white' : 'text-black'}>Modalità</span> 
                                {
                                    bg === 'dark' ? (
                                        <DarkModeIcon sx={{ color: "white" }} />
                                    ) : (
                                        <LightModeIcon sx={{ color: "black" }} />
                                    )
                                }
                            </IconButton>
                        </div>
                    </div>
                    <div className={bg === 'dark' ? "relative flex flex-row p-2 justify-center items-center h-4/5 w-full border-2 border-white/50 rounded-2xl" : "relative flex flex-row p-2 justify-center items-center h-4/5 w-full border-4 border-double border-purple-800/30 rounded-2xl"}>
                        <div className="relative flex flex-row flex-wrap justify-between gap-y-4 p-5 h-120 w-full overflow-x-hidden overflow-y-auto">
                            {
                                isLoading || isFetching ? (
                                    <p>Dati in caricamento...</p>
                                ) : (
                                    error ? (
                                        <p>Errore di caricamento</p>
                                    ) : (
                                        dataBlog?.map((el) => (
                                            <Cards key={el.id} dataBlog={el} id={String(el.id)} isDetails={true} setLoadingLink={setLoadingLink} />
                                        ))
                                    )
                                )
                            }
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}