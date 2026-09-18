'use client'
import "./globals.css";

import Cards from "../components/Cards";
import ImageBG from "../components/ImageBG";
import IconToggle from "../components/iconToggle";

interface dataHomeCardProps {
    dataBlog: any;
}

export default function HomeClient({ dataBlog }: dataHomeCardProps) {
    return (
        <div className="relative flex flex-1 h-dvh w-full bg-white dark:bg-black p-3 object-center object-cover bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ06R0MuBxCafDIfD3FfgEE6h8lI2DoVhL19zw8s9DNLw&s=10)] dark:bg-[url(https://png.pngtree.com/thumb_back/fh260/background/20240104/pngtree-mystic-blackberry-a-textured-design-on-an-abstract-dark-purple-background-image_13879614.png)]">

            <div className="relative flex flex-1 flex-col rounded-2xl w-full p-1 gap-y-2">
                <div className="relative flex flex-col items-center h-1/5 w-full border-2 border-purple-800/30 dark:border-white/50 rounded-2xl py-2">
                    <div className="relative flex flex-row h-1/3 w-full justify-center items-center bg-clip-text text-transparent">
                        <h1 className="font-extrabold text-3xl text-black dark:text-white">
                            BLOG DI TUTTI GLI ARTICOLI PER I SAGGI IN LATINO
                        </h1>
                    </div>
                    <div className="relative flex flex-row h-1/3 w-full justify-center items-center">
                        <h2 className="dark:text-white text-black text-lg">Il tuo Blog dove puoi visualizzare tutti gli articoli che sono stati pubblicati</h2>
                    </div>
                    <div className="relative flex flex-row h-1/3 w-full justify-center items-center">
                        <IconToggle />
                    </div>
                </div>
                <div className="relative flex flex-row p-2 justify-center items-center h-4/5 w-full border-2 border-purple-800/30 dark:border-white/50 rounded-2xl">
                    <div className="relative flex flex-row flex-wrap justify-between gap-y-4 p-5 h-120 w-full overflow-x-hidden overflow-y-auto">
                        {
                            Array.isArray(dataBlog) ? (
                                dataBlog?.map((el) => (
                                    <Cards key={el.id} dataBlog={el} id={String(el.id)} isDetails={true} />
                                ))
                            ) : (<p>Dati non trovati</p>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}