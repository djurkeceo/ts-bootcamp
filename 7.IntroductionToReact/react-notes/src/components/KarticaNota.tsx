import { type Notes } from "../types.ts"

function KarticaNota ({id, naslov, sadrzaj, boja, datumKreiranja}: Notes) {
    return (
        <div style={{backgroundColor: boja}}>
            <h1 style={{fontSize: 25}}>naslov: {naslov} id: {id}</h1>
            <p>sadrzaj: {sadrzaj}</p>
            <p>datum kreiranja: {datumKreiranja}</p>
        </div>
    )
}

export default KarticaNota