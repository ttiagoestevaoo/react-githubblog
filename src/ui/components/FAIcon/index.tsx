import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface FAIcon {
    icon: IconProp
}

export function FAIcon({icon}: FAIcon) {
    return <FontAwesomeIcon icon={icon}/>
}