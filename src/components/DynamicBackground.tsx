'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const LIGHT_BG = "/lightBg.jpeg";
const DARK_BG = "/darkBg.png";

export default function DynamicBackground() {
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    // 1. Funzione per sincronizzare lo stato leggendo direttamente il DOM o il localStorage
    const syncTheme = () => {
      const isDarkClass = document.documentElement.classList.contains('dark');
      setIsDark(isDarkClass);
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
    <Image
      key={isDark ? 'dark-mode-bg' : 'light-mode-bg'} // La prop KEY è fondamentale per forzare il re-render pulito dell'immagine
      src={isDark ? DARK_BG : LIGHT_BG}
      alt="Sfondo dinamico dell'applicazione"
      fill
      priority // Ottimizza l'LCP per Lighthouse
      loading={'eager'}
      style={{
        objectFit: 'cover',
        objectPosition: 'center',       
      }}
      // className="object-cover object-center transition-all duration-300"
    />
  );
}