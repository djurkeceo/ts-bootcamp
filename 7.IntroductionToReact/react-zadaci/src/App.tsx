import { useState } from 'react'

function Brojac() {
    // [trenutnaVrednost, funkcijaZaPromenu] = useState(pocetnaVrednost)
    const [broj, setBroj] = useState<number>(0)

    return (
        <div>
            <p>Broj: {broj}</p>
            <button onClick={() => setBroj(broj + 1)}>Povećaj</button>
            <button onClick={() => setBroj(broj - 1)}>Smanji</button>
        </div>
    )
}

function App() {
    return (
        <div>
            <h1>Zdravo iz Reacta!</h1>
            <p>Ovo je moja prva komponenta.</p>

            <Brojac />
        </div>
    )
}

export default App