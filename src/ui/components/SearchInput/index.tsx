import { useEffect, useState } from "react"

interface SearchInputProps {
    value: string
    onChange: (search: string) => void
}

export function SearchInput({value, onChange}: SearchInputProps) {
    const [search, setSearch] = useState(value)

    useEffect(() => {
        const lazySearchChange = setTimeout(() => {
            onChange(search)
        }, 500)

        return () => clearTimeout(lazySearchChange)
    })
    
    return (
        <input 
            type="text" 
            placeholder="Buscar conteúdo" 
            className="
                appearance-none 
                text-base-text
                py-3 
                px-4 
                placeholder-shown:border-base-border 
                placeholder-base-label
                outline-none 
                bg-base-input 
                border-2 
                border-blue
                rounded
                flex-1 
            "
            value={search}
            onChange={(event) => setSearch(event.target.value)}
        />
    )
}