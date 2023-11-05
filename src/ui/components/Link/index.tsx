import { ReactNode } from "react"

interface LinkProps {
    url: string
    children: ReactNode
}

export function Link({url, children}: LinkProps) {
    return (
        <a href={url} target='_blank' className="uppercase text-blue text-sm flex gap-2 items-center border-text-blue hover:border-b-2">{children}</a>
    )
}

