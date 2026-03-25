import React, { useState } from "react";
import KarticaNota from "./components/KarticaNota.tsx";
import FormaZaNotu from "./components/FormaZaNotu.tsx"
import { type Notes } from "./types.ts";

function App () {
  const datum = new Date() 
  const danasnjiDatum = datum.toLocaleDateString()

  const [note, setNote] = useState<Notes[]>([
    { id: 1, naslov: 'Notes 1', sadrzaj: 'Ovo je sadrzaj notesa 1...', boja: 'red', datumKreiranja: danasnjiDatum },
    { id: 2, naslov: 'Notes 2', sadrzaj: 'Ovo je sadrzaj notesa 2...', boja: 'green', datumKreiranja: danasnjiDatum },
    { id: 3, naslov: 'Notes 3', sadrzaj: 'Ovo je sadrzaj notesa 3...', boja: 'blue', datumKreiranja: danasnjiDatum },
    { id: 4, naslov: 'Notes 4', sadrzaj: 'Ovo je sadrzaj notesa 4...', boja: 'orange', datumKreiranja: danasnjiDatum }
  ]);

const kreirajNotes = (noviNotes: Notes) => {
  setNote([...note, noviNotes])
}

  return(
  <>
    <div>
      <h1>Moji notesi</h1>
      <h2>Pretrazi notes</h2>
      <span>
        <input type="text"/>
        <button>Pretrazi</button>
      </span>
    </div>

    <div>
      {note.map((pojedinacnaNota: Notes) =>
        <KarticaNota
          key={(pojedinacnaNota.id)}
          {...pojedinacnaNota}
        />
      )}
    </div>
    
    <div style={{marginTop: 20}}>
      <h2>Kreiraj novi notes</h2>
      <FormaZaNotu onKreiraj={kreirajNotes}/>
    </div>
  </>
  )
}

export default App  