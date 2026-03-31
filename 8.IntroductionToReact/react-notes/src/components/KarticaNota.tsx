import { type Notes } from "../types.ts"

interface KarticaProp extends Notes {
    onObrisi: (id: number) => void
}

function KarticaNota ({id, naslov, sadrzaj, boja, datumKreiranja, onObrisi}: KarticaProp) {
    return (
        <div style={{backgroundColor: boja}}>
            <h1 style={{fontSize: 25}}>naslov: {naslov} id: {id}</h1>
            <p>sadrzaj: {sadrzaj}</p>
            <p>datum kreiranja: {datumKreiranja}</p>
            <button
                onClick={() => onObrisi(id)}
                >Izbrisi
            </button>
        </div>
    )
}

export default KarticaNota