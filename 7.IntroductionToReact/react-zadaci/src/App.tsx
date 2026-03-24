import { useState } from 'react'
import { type PrioritetZadatka, type StatusZadataka, type Zadatak } from './types.ts'
import KarticaZadatka from './components/KarticaZadataka.tsx'
import { kreirajZadatak } from './components/FormaZadatka.tsx'
import './App.css'

// const zadaci: Zadatak[] = [
//   { id: 1, naziv: 'ide gas', opis: 'ide gas na maks', prioritet: 'nizak', status: 'todo', datumKreiranja: '3/23/2026' },
//   { id: 2, naziv: 'ide gas 2', opis: 'ide gas na maks 2', prioritet: 'srednji', status: 'u-toku', datumKreiranja: '3/23/2026' },
//   { id: 3, naziv: 'ide gas 3', opis: 'ide gas na maks 3', prioritet: 'visok', status: 'zavrseno', datumKreiranja: '3/23/2026' }
// ]

function App() {
    const [filter, setFilter] = useState<StatusZadataka | 'svi'>('svi')
    const [zadaci, setZadaci] = useState<Zadatak[]>([
        { id: 1, naziv: 'ide gas', opis: 'ide gas na maks', prioritet: 'nizak', status: 'todo', datumKreiranja: '3/23/2026' },
        { id: 2, naziv: 'ide gas 2', opis: 'ide gas na maks 2', prioritet: 'srednji', status: 'u-toku', datumKreiranja: '3/23/2026' },
        { id: 3, naziv: 'ide gas 3', opis: 'ide gas na maks 3', prioritet: 'visok', status: 'zavrseno', datumKreiranja: '3/23/2026' }
    ])
    const [naziv, setNaziv] = useState<string>('');
    const [opis, setOpis] = useState<string>('');
    const [prioritet, setPrioritet] = useState<PrioritetZadatka>('nizak');
    const idPoslednjegZadatka = zadaci[zadaci.length - 1].id

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

            { filtriraniZadaci.map(zadatak => (
                <KarticaZadatka key={zadatak.id} {...zadatak} />
            )) }
            
            { filtriraniZadaci.length === 0 && <p>Nema zadataka sa ovim statusom.</p> }

            <div className="inputDiv">
                <input 
                value={naziv} 
                onChange={e => setNaziv(e.target.value)}
                type="text" 
                placeholder='unesi naziv zadatka'/>

                <input 
                value={opis}
                onChange={e => setOpis(e.target.value)}
                type="text"
                placeholder='unesi opis zadataka'/>

                <select 
                value={prioritet}
                onChange={e => setPrioritet(e.target.value as PrioritetZadatka)} 
                name="PrioritetZadatka">
                    <option value="nizak">Nizak</option>
                    <option value="srednji">Srednji</option>
                    <option value="visok">Visok</option>
                </select>

                <button id="sumbitBtn" onClick={() => setZadaci([...zadaci, kreirajZadatak(naziv, opis, prioritet)])} >Dodaj zadatak</button>
            </div>
        </div>
    )
}

export default App