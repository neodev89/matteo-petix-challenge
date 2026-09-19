'use client'
import "./globals.css";

import Cards from "../components/Cards";
import IconToggle from "../components/iconToggle";

interface dataHomeCardProps {
    dataBlog: any;
}

export default function HomeClient({ dataBlog }: dataHomeCardProps) {
    return (
        <div className="homeClient">

            <div className="subHomeClient">
                <div className="wrappedSubHomeClient">
                    <div className="wrapperDivHomeClient">
                        <h1 className="h1TitleHomeClient">
                            BLOG DI TUTTI GLI ARTICOLI PER I SAGGI IN LATINO
                        </h1>
                    </div>
                    <div className="relative flex flex-row h-1/3 w-full justify-center items-center">
                        <h2 className="h2SubTitleHomeClient">Il tuo Blog dove puoi visualizzare tutti gli articoli che sono stati pubblicati</h2>
                    </div>
                    <div className="relative flex flex-row h-1/3 w-full justify-center items-center">
                        <IconToggle />
                    </div>
                </div>
                <div className="relative flex flex-row p-2 justify-center items-center h-4/5 w-full border-2 border-purple-800/30 dark:border-white/50 rounded-2xl">
                    <div className="wrapperCards">
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