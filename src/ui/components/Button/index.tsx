import { ButtonHTMLAttributes, ReactNode } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
}

export function Button({children, ...otherProps}: ButtonProps) {
    return <button className="uppercase text-blue text-sm flex gap-2 items-center border-text-blue hover:border-b-2" {...otherProps}>{children}</button>
}