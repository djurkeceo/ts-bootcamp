import type { Zadatak } from '../types.ts'

function KarticaZadatka({ id, naziv, opis, prioritet, status, datumKreiranja }: Zadatak) {
    return (
        <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
            <h2>{naziv} (ID: {id})</h2>
            <p><strong>Opis:</strong> {opis}</p>
            <p><strong>Prioritet:</strong> {prioritet}</p>
            <p><strong>Status:</strong> {status}</p>
            <small>Kreirano: {datumKreiranja}</small>
        </div>
    )
}

export default KarticaZadatka;
