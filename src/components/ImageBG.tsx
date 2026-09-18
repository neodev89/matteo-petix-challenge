'use client'

import Image from "next/image";
import { useBg } from "../hooks/useCtx";

export default function ImageBG() {
    const { bg } = useBg();
    return (
            <Image 
                src={bg === 'dark' ? "https://png.pngtree.com/thumb_back/fh260/background/20240104/pngtree-mystic-blackberry-a-textured-design-on-an-abstract-dark-purple-background-image_13879614.png" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ06R0MuBxCafDIfD3FfgEE6h8lI2DoVhL19zw8s9DNLw&s=10"}
                alt={"sfondo viole per il blog"}
                fill
                preload
                loading={"eager"}
                unoptimized
                quality={80}
                style={{
                    objectFit: 'cover',
                    objectPosition: 'center',
                }}
            />
    )
}