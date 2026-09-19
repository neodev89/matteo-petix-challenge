'use client'

import IconButton from "@mui/material/IconButton";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useEffect, useState } from "react";

// export default function IconToggle() {
//     const { toggleBg, bg } = useBg()
//     return (
//         <IconButton
//             type="button"
//             size="medium"
//             onClick={toggleBg}
//         >
//             <span className={bg === 'dark' ? 'text-white' : 'text-black'}>Modalità</span>
//             {
//                 bg === 'dark' ? (
//                     <DarkModeIcon sx={{ color: "white" }} />
//                 ) : (
//                     <LightModeIcon sx={{ color: "black" }} />
//                 )
//             }
//         </IconButton>
//     )
// }


export default function IconToggle() {
    const [isDark, setIsDark] = useState(true);

    // Sincronizza lo stato locale dell'icona all'avvio controllando il DOM
    useEffect(() => {
        setIsDark(document.documentElement.classList.contains('dark'));
    }, []);

    const toggleTheme = () => {
        // 1. Alterna la classe 'dark' sul tag <html>
        const darkNow = document.documentElement.classList.toggle('dark');

        // 2. Persisti la scelta dell'utente
        localStorage.setItem('theme', darkNow ? 'dark' : 'light');

        // 3. Aggiorna lo stato locale unicamente per scambiare l'icona
        setIsDark(darkNow);

        // Notifica il cambio di tema a tutta l'applicazione
        window.dispatchEvent(new Event('themeChange'));
    };

    return (
        <IconButton type="button" size="medium" onClick={toggleTheme}>
            {/* Sfrutta le classi Tailwind dark: anziché le condizioni JS se vuoi */}
            <span className="text-black dark:text-white">Modalità</span>
            {isDark ? (
                <DarkModeIcon sx={{ color: "white" }} />
            ) : (
                <LightModeIcon sx={{ color: "black" }} />
            )}
        </IconButton>
    );
}