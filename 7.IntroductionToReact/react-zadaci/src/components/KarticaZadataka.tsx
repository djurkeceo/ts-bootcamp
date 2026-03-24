import type { Zadatak } from '../types.ts'

interface KarticaProp extends Zadatak {
    onObrisi: (id: number) => void
}

function KarticaZadatka({ id, naziv, opis, prioritet, status, datumKreiranja, onObrisi }: KarticaProp) {
    return (
        <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
            <h2>{naziv} (ID: {id})</h2>
            <p><strong>Opis:</strong> {opis}</p>
            <p><strong>Prioritet:</strong> {prioritet}</p>
            <p><strong>Status:</strong> {status}</p>
            <small>Kreirano: {datumKreiranja}</small>
            <button 
            id="izbrisiZadatak"
            onClick={() => onObrisi(id)}
            >Izbrisi zadatak</button>
        </div>
    )
}

export default KarticaZadatka;
