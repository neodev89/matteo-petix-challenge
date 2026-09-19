'use client'

import DetailCard from "@/src/components/DetailsCard";
import DynamicBackground from "@/src/components/DynamicBackground";
import IconToggle from "@/src/components/iconToggle";
import { blogType } from "@/src/zod/blogSchema";
import { useEffect, useState } from "react";

interface postClientProps {
    data: blogType;
}

export default function PostClient({ data }: postClientProps) {
    const [mode, setMode] = useState<boolean>(true);

    useEffect(() => {
        // 1. Funzione per sincronizzare lo stato leggendo direttamente il DOM o il localStorage
        const syncTheme = () => {
            const isDarkClass = document.documentElement.classList.contains('dark');
            setMode(isDarkClass);
        };

        // Esegui subito al montaggio del componente
        syncTheme();

        // 2. Ascolta le modifiche alla classe 'dark' sul tag <html> (scatenate da IconToggle)
        const observer = new MutationObserver(() => {
            syncTheme();
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class'],
        });

        return () => observer.disconnect();
    }, []); // Array vuoto: si registra solo 1 volta al montaggio
    // questo pattern funziona veramente e ora sarà possibile
    // creare immagini condizionali

    return (
        <div className="detailsCard">
            <DynamicBackground />
            <div className="wrappedDetailIconBtn">
                <IconToggle />
            </div>
            <div className="wrappedDetailCard">
                <>
                    {
                        data !== null ? (
                            <DetailCard dataBlog={data} />
                        ) : (<p>I dati non ci sono</p>)
                    }
                </>
            </div>
        </div>
    )
}