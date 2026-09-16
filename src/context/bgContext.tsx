'use client'

import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";

interface ctxProps {
    bg: 'dark' | 'light';
    toggleBg: () => void;
}

export const BgContext = createContext<ctxProps>({
    bg: 'dark',
    toggleBg: () => {},
});

export function ContextBgProvider({ children }: { children: React.ReactNode }) {
  const [bg, setBg] = useState<'dark' | 'light'>('dark');

  const toggleBg = () => {
    setBg(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <BgContext.Provider value={{ bg, toggleBg }}>
      {children}
    </BgContext.Provider>
  );
}