'use client';

import { useContext } from "react";
import { BgContext } from "../context/bgContext";

export function useBg() {
  return useContext(BgContext);
}
