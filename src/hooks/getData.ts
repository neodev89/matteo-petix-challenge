import { blogSchema } from "../zod/blogSchema";

export async function getData({ params }: { params: { id: string } }) {
    try {
        const { id } = params;
        const dto = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            headers: {
                "Content-Type": "application/json",
            }
        });
        if (!dto.ok) return;
        const data = await dto.json(); 
        const parsed = await blogSchema.parseAsync(data);
        if (!parsed) return;
        return parsed;
    } catch (error: Error | unknown) {
        return error instanceof Error ? error.message : String(error);
    }
}