import { ReactNode } from "react"

interface TitleLProps {
    children: ReactNode
    className?: string
}

export function TitleL({children, className}: TitleLProps) {
    return <h2 className={`text-base-title text-xl ${className}`}>{children}</h2>
}