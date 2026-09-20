import { ReactNode } from "react";

interface globalWrapProps {
    children: ReactNode;
}

export default function GlobalWrapper({ children }: globalWrapProps) {
    return (
        <div className="relative flex flex-1 flex-row w-full">
            {children}
        </div>
    )
}