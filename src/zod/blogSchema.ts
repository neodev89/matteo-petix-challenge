import { z } from "zod";

export const blogSchema = z.object({
    userId: z.number().nonnegative().nonoptional(),
    id: z.number().nonnegative().nonoptional(),
    title: z.string().nonoptional(),
    body: z.string().nonoptional(),
});

export const arrayBlogSchema = z.array(blogSchema);

export type blogType = z.infer<typeof blogSchema>;
export type arrayBlogType = z.infer<typeof arrayBlogSchema>;