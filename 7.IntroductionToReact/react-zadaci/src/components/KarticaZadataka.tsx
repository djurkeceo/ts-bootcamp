import type { StatusZadataka, Zadatak } from '../types.ts'

interface KarticaProp extends Zadatak {
    onObrisi: (id: number) => void
    onPromeniStatus: (id: number, noviStatus: StatusZadataka) => void
}

function KarticaZadatka({ id, naziv, opis, prioritet, status, datumKreiranja, onObrisi, onPromeniStatus }: KarticaProp) {
    return (
        <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
            <h2>{naziv} (ID: {id})</h2>
            <p><strong>Opis:</strong> {opis}</p>
            <p><strong>Prioritet:</strong> {prioritet}</p>
            <p><strong>Status:</strong> {status}</p>
            <small>Kreirano: {datumKreiranja}</small>
            <button 
                onClick={() => onObrisi(id)}
                >Izbrisi zadatak
            </button>
            <button
                onClick={() => onPromeniStatus(id, 'todo')}
                >Todo
            </button>
            <button
                onClick={() => onPromeniStatus(id, 'u-toku')}
                >U-toku
            </button>
            <button
                onClick={() => onPromeniStatus(id, 'zavrseno')}
                >Zavrseno
            </button>
        </div>
    )
}

export default KarticaZadatka;
