import { useState } from "react"

function FormaZaNotu () {
    const [boja, setBoja] = useState<string>('none');
    
    return (
        <div>
            <input required placeholder="unesi naslov" type="text"></input>
            <input placeholder="unesi sadrzaj" type="text"></input>
            <select 
            value={boja}
            onChange={e => setBoja(e.target.value)}>
                <option value="red">crvena</option>
                <option value="green">zelena</option>
                <option value="blue">plava</option>
                <option value="yellow">zuta</option>
            </select>
        </div>  
    )  
}

export default FormaZaNotu