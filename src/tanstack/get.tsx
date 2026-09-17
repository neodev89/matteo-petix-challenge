import { useQuery } from "@tanstack/react-query"
import { getProps, getSchemaZodProps } from "../interfaces/apiClient"
import instance from "../axios/instance"
import z, { ZodType } from "zod";

export function useGet({
  url, mutationKey, enable, ...other  
}: getProps) {
    return useQuery({
        queryKey: mutationKey,
        queryFn: async () => {
            const result = await instance.get(
                url, {
                    params: other.body ?? {}
                }
            );
            if (result.status > 200) return;
            return result.data
        },
        enabled: enable,
        staleTime: other.staleTime,
        retry: other.retry,
        networkMode: other.networkMode,
        gcTime: other.gcTime,

        meta: {
            description: "Get request with full control!",
        }
    });
};

export function useGetParsedZod<TSchema extends ZodType = ZodType>({
    key,
    url,
    body,
    enabled = true,
    staleTime = 1000 * 60 * 5, // 5 minuti
    retry = 1,
    networkMode = "online",
    gcTime = 1000 * 60 * 10, // 10 minuti
    schema, // 👈 2. Estraiamo lo schema
}: getSchemaZodProps<TSchema>) {

    // Se passiamo lo schema, usiamo z.infer per ricavare il tipo T dei dati
    type TData = z.infer<TSchema>;

    return useQuery<TData>({
        queryKey: key,
        queryFn: async () => {
            const res = await instance.get<TData>(url, {
                params: body ?? {}
            });

            // console.log("Che tipo di response ottengo? ", res);
            // 👈 3. Validazione con Zod: se viene fornito uno schema, eseguiamo il parsing
            if (schema) {
                // Se ApiResponse ha una struttura tipo { success, message, data },
                // puoi validare solo il payload 'data' oppure l'intera risposta
                const validatedData = await schema.parseAsync(res.data);
                
                if (!validatedData) return await res.data;
                return validatedData
            } else {
                return res.data;
            }
        },
        enabled,
        staleTime,
        retry,
        networkMode,
        gcTime,

        meta: {
            description: "GET request with full Zod control",
        },
    });
};
