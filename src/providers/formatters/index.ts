import { formatDistanceToNow, parseISO } from "date-fns"
import {ptBR} from 'date-fns/locale'

export const getDistanceToNow = (dateToFormat: string) => {
    const distanceToNow = formatDistanceToNow(parseISO(dateToFormat), {
        locale: ptBR, addSuffix: true
    })

    return `${distanceToNow[0].toLocaleUpperCase()}${distanceToNow.slice(1)}`
}