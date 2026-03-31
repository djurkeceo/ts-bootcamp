type PrioritetZadatka = 'nizak' | 'srednji'| 'visok';
type StatusZadataka = 'todo' | 'u-toku' | 'zavrseno';

interface Zadatak {
  readonly id: number;
  naziv: string;
  opis: string;
  prioritet: PrioritetZadatka;
  status: StatusZadataka;
  datumKreiranja: string
}

interface Statistika {
  ukupnoZadataka: number;
  brojZavrsenihZadataka: number;
  brojVisokoPrioritetnihZadataka: number
}

const datum = new Date();
const danasnjiDatum = datum.toLocaleDateString()

const zadaci: Zadatak[] = [
  {
    id: Math.floor(Math.random() * 1000),
    naziv: 'ide gas',
    opis: 'ide gas na maks',
    prioritet: 'nizak',
    status: 'todo',
    datumKreiranja: danasnjiDatum
  },
  {
    id: Math.floor(Math.random() * 1000),
    naziv: 'ide gas',
    opis: 'ide gas na maks',
    prioritet: 'srednji',
    status: 'u-toku',
    datumKreiranja: danasnjiDatum
  },
  {
    id: Math.floor(Math.random() * 1000),
    naziv: 'ide gas',
    opis: 'ide gas na maks',
    prioritet: 'visok',
    status: 'zavrseno',
    datumKreiranja: danasnjiDatum
  },
]

function prikaziZadatak (zadatak: Zadatak) {
  let borderColor = 'black';
  if (zadatak.prioritet === 'nizak') borderColor = 'red';
  if (zadatak.prioritet === 'srednji') borderColor = 'yellow';
  if (zadatak.prioritet === 'visok') borderColor = 'limegreen';

  return `
    <div class="kartica-zadatka" style="border: solid ${borderColor}; margin-bottom: 10px">
        <h3>id: ${zadatak.id}</h3>
        <h3>naziv: ${zadatak.naziv}</h3>
        <h3>opis: ${zadatak.opis}</h3>
        <h3>prioritet: ${zadatak.prioritet}</h3>
        <h3>status: ${zadatak.status}</h3>
        <h3>datum kreiranja: ${zadatak.datumKreiranja}</h3>
    </div>
  `;
}


function kreirajZadatak (naziv: Zadatak['naziv'], opis: Zadatak['opis'], prioritet: Zadatak['prioritet']): Zadatak {  
  return {
    id: Math.floor(Math.random() * 1000),
    naziv: naziv,
    opis: opis,
    prioritet: prioritet,
    status: 'todo',
    datumKreiranja: danasnjiDatum
  }
}

function renderujZadatke (zadaci: Zadatak[]): void {
  const app = document.querySelector('#app') as HTMLDivElement
  
  const stat = izracunajStatistiku(zadaci);
  app.innerHTML = `
      <h1>Sistem za upravljanje zadacima</h1>
      <p>Ukupno: ${stat.ukupnoZadataka} | 
        Završeno: ${stat.brojZavrsenihZadataka} | 
        Visok prioritet: ${stat.brojVisokoPrioritetnihZadataka}</p>
      ${zadaci.map(prikaziZadatak).join('')}
  `;

}

function filtrirajZadatke (zadaci: Zadatak[], status: StatusZadataka): void {
  const filtriraniZadaci = zadaci.filter(zadatak => zadatak.status === status)

  renderujZadatke(filtriraniZadaci)  
}

function izracunajStatistiku (zadaci: Zadatak[]): Statistika {
  return {
    ukupnoZadataka: zadaci.length,
    brojZavrsenihZadataka: zadaci.filter(zadatak => zadatak.status === 'zavrseno').length,
    brojVisokoPrioritetnihZadataka: zadaci.filter(zadatak => zadatak.prioritet === 'visok').length
  }
}

const sviBtn = document.querySelector('#sviBtn') as HTMLButtonElement
const todoBtn = document.querySelector('#todoBtn') as HTMLButtonElement
const u_tokuBtn = document.querySelector('#u-tokuBtn') as HTMLButtonElement
const zavrsenoBtn = document.querySelector('#zavrsenoBtn') as HTMLButtonElement

sviBtn.addEventListener('click', () => {
  renderujZadatke(zadaci)
})

todoBtn.addEventListener('click', () => {
  const inner = todoBtn.innerText.toLowerCase() as StatusZadataka

  filtrirajZadatke(zadaci, inner)
})

u_tokuBtn.addEventListener('click', () => {
  const inner = u_tokuBtn.innerText.toLowerCase() as StatusZadataka

  filtrirajZadatke(zadaci, inner)
})

zavrsenoBtn.addEventListener('click', () => {
  const inner = zavrsenoBtn.innerText.toLowerCase() as StatusZadataka

  filtrirajZadatke(zadaci, inner)
})
