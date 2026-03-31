import { useState } from "react"
import { type Boje, type Notes } from "../types.ts";

interface notesProps {
    onKreiraj: (noviNotes: Notes) => void
}

function FormaZaNotu ({onKreiraj}: notesProps) {
    
    const [naslov, setNaslov] = useState<string>('');
    const [sadrzaj, setSadrzaj] = useState<string>('');
    const [boja, setBoja] = useState<Boje>('red');

    const kreirajNotes = () => {
        const noviNotes: Notes = {
            id: Math.floor(Math.random() * 1000),
            naslov,
            sadrzaj,
            boja,
            datumKreiranja: new Date().toLocaleDateString()
        }

        onKreiraj(noviNotes)

        setNaslov('')
        setSadrzaj('')
        setBoja('red')
    }

    return (
        <div>
            <input 
                value={naslov}
                onChange={e => setNaslov(e.target.value)}
                placeholder="unesi naslov" 
                type="text">
            </input>

            <input 
                value={sadrzaj}
                onChange={e => setSadrzaj(e.target.value)}
                placeholder="unesi sadrzaj" 
                type="text">
            </input>

            <select 
                value={boja}
                onChange={e => setBoja(e.target.value as Boje)}>
                <option value="red">crvena</option>
                <option value="green">zelena</option>
                <option value="blue">plava</option>
                <option value="orange">narandzasta</option>
                <option value="purple">ljubicasta</option>
                <option value="indigo">indigo</option>
            </select>

            <button onClick={kreirajNotes}>Kreiraj</button>
        </div>  
    )  
}


export default FormaZaNotu