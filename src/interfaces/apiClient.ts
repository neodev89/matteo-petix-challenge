import { NetworkMode } from "@tanstack/react-query";
import { ZodType } from "zod";

interface getProps {
    url: string;
    mutationKey: string[];
    enable: boolean;
    body?: unknown;
    cache?: RequestCache;
    gcTime?: number;
    staleTime?: number;
    retry?: | number | boolean | ((failureCount: number, error: unknown) => boolean);
    networkMode?: NetworkMode;
};

interface getSchemaZodProps<TSchema extends ZodType = ZodType> {
    key: string[];
    url: string;
    body?: unknown;
    enabled?: boolean;
    staleTime?: number;
    retry?: number;
    networkMode?: NetworkMode;
    gcTime?: number;
    description?: string;
    schema?: TSchema; // 👈 1. Aggiunto lo schema Zod opzionale
}

export type {
    getProps,
    getSchemaZodProps
}