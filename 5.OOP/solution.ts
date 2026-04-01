// class Vozilo {
//     protected vrstaVozila: string
//     protected brojSedista: number

//     constructor (vrstaVozila: string, brojSedista: number) {
//         this.vrstaVozila = vrstaVozila
//         this.brojSedista = brojSedista
//     }
    
//     prikaziInfo (): string {
//         return `Vrsta vozila: ${this.vrstaVozila}, Broj sedista: ${this.brojSedista}`
//     }
// }  

// class Automobil extends Vozilo {
//     private markaAutomobila: string
//     private godisteAutomobila: number

//     constructor (markaAutomobila: string, godisteAutomobila: number, brojSedista: number) {
//         super('Automobil', brojSedista)
//         this.markaAutomobila = markaAutomobila
//         this.godisteAutomobila = godisteAutomobila
//     }

//     prikaziInfo (): string {
//         return `${super.prikaziInfo()}, Marka automobila: ${this.markaAutomobila}, Godiste automobila: ${this.godisteAutomobila}`
//     }
// }

// const vozilo1 = new Vozilo ('Kamion', 3)
// console.log(vozilo1.prikaziInfo())
// const automobil1 = new Automobil ('Audi', 2015, 5)
// console.log(automobil1.prikaziInfo())


class Igrac {
    public ime: string
    private zdravlje: number
    private nivo: number

    constructor (ime: string, zdravlje: number = 100) {
        this.ime = ime
        this.zdravlje = Math.min(zdravlje, 100)
        this.nivo = 1
    }

    napadni (protivnik: Igrac): void {
        const steta = Math.floor(Math.random() * 11) + 10
        protivnik.primiStetu(steta)
    }

    primiStetu (steta: number): void {
        this.zdravlje = Math.max(0, this.zdravlje - steta)
    }

    getZdravlje (): number {
        return this.zdravlje
    }

    getNivo (): number {
        return this.nivo
    }

    jeZiv (): boolean {
        return this.zdravlje > 0 
    }

    levelUp (): void {
        this.nivo++
    }
}

const igrac1 = new Igrac('djurke', 100)
const igrac2 = new Igrac('maribor', 100)

while (igrac1.jeZiv() && igrac2.jeZiv()) {
    igrac1.napadni(igrac2)
    if (!igrac2.jeZiv()) break
    igrac2.napadni(igrac1)
}

const pobednik = igrac1.jeZiv() ? igrac1 : igrac2
pobednik.levelUp()
console.log(`${pobednik.ime} je pobednik! Nivo: ${pobednik.getNivo()}`)