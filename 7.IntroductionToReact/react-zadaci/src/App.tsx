import { useState } from 'react'
import { type StatusZadataka, type Zadatak } from './types.ts'
import KarticaZadatka from './components/KarticaZadataka.tsx'

const [zadaci, setZadaci] = useState<Zadatak[]>([
    { id: 1, naziv: 'ide gas', opis: 'ide gas na maks', prioritet: 'nizak', status: 'todo', datumKreiranja: '3/23/2026' },
    { id: 2, naziv: 'ide gas 2', opis: 'ide gas na maks 2', prioritet: 'srednji', status: 'u-toku', datumKreiranja: '3/23/2026' },
    { id: 3, naziv: 'ide gas 3', opis: 'ide gas na maks 3', prioritet: 'visok', status: 'zavrseno', datumKreiranja: '3/23/2026' }
])

// const zadaci: Zadatak[] = [
//   { id: 1, naziv: 'ide gas', opis: 'ide gas na maks', prioritet: 'nizak', status: 'todo', datumKreiranja: '3/23/2026' },
//   { id: 2, naziv: 'ide gas 2', opis: 'ide gas na maks 2', prioritet: 'srednji', status: 'u-toku', datumKreiranja: '3/23/2026' },
//   { id: 3, naziv: 'ide gas 3', opis: 'ide gas na maks 3', prioritet: 'visok', status: 'zavrseno', datumKreiranja: '3/23/2026' }
// ]

function App() {
  const [filter, setFilter] = useState<StatusZadataka | 'svi'>('svi')

  const filtriraniZadaci = zadaci.filter(zadatak => {
    if(filter === 'svi') return true
    return zadatak.status === filter
  })

    return (  
      <div>
            <h1>Moji Zadaci</h1>
            
            <div style={{ marginBottom: '20px' }}>
                <button onClick={() => setFilter('svi')}>Svi</button>
                <button onClick={() => setFilter('todo')}>To Do</button>
                <button onClick={() => setFilter('u-toku')}>U toku</button>
                <button onClick={() => setFilter('zavrseno')}>Završeno</button>
                <p>Trenutni filter: <strong>{filter}</strong></p>
            </div>

            {filtriraniZadaci.map(zadatak => (
                <KarticaZadatka key={zadatak.id} {...zadatak} />
            ))}
            
            {filtriraniZadaci.length === 0 && <p>Nema zadataka sa ovim statusom.</p>}
        </div>
    )
}

export default App