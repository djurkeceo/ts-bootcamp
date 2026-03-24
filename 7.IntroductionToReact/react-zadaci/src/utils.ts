import type { PrioritetZadatka, Zadatak } from "./types.ts"

const datum = new Date()
const danasnjiDatum = datum.toLocaleDateString()

function kreirajZadatak (naziv: string, opis: string, prioritet: PrioritetZadatka): Zadatak {
    return {
        id: Math.floor(Math.random()*1000),
        naziv: naziv,
        opis: opis,
        prioritet: prioritet,
        status: 'todo',
        datumKreiranja: danasnjiDatum
    }
}

export default kreirajZadatak