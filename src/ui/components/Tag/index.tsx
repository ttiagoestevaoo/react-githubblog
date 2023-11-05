import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { FAIcon } from "../FAIcon"

interface TagProps {
    icon: IconProp
    description: string | number
}

export function Tag({icon, description}: TagProps) {
    return (
        <div className='text-base-subtitle text-base gap-2 flex items-center'>
            <span><FAIcon icon={icon} /></span>
            <span>{description}</span>
        </div>
    )
}