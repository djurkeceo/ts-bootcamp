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
    protected zdravlje: number
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

class Ratnik extends Igrac {
    private oklop: number

    constructor (ime: string, oklop: number) {
        super (ime)
        this.oklop = oklop
    }

    override primiStetu(steta: number): void {
        if (this.oklop > 0) {
            const preostalaSteta = Math.max(0, steta - this.oklop)
            this.oklop = Math.max(0, this.oklop - steta)
            this.zdravlje = Math.max(0, this.zdravlje - preostalaSteta)
        } else {
            this.zdravlje = Math.max(0, this.zdravlje - steta)
        }
 
    }
}

class Mag extends Igrac {
    private mana: number

    constructor (ime: string, mana: number = 100) {
        super (ime)
        this.mana = 100
    }

    magijaNapad (protivnik: Igrac): void {
        if (this.mana >= 20) {
            const steta = Math.floor(Math.random() * 21) + 30
            protivnik.primiStetu(steta)
            this.mana -= 20  
        } else {
            const steta = Math.floor(Math.random() * 11) + 10
            protivnik.primiStetu(steta)
        }
 
    }
}

class Lekar extends Igrac {
    lecenje (): void {
        this.zdravlje = Math.min(this.zdravlje + 20, 100)
    }
}

const igrac1 = new Igrac('djurke', 100)
const igrac2 = new Mag('maribor', 100)
const igrac3 = new Lekar('zalfija', 100)
const sviIgraci = [igrac1, igrac2, igrac3]

while (igrac1.jeZiv() && igrac2.jeZiv() && igrac3.jeZiv()) {
    igrac1.napadni(sviIgraci[Math.floor(Math.random() * sviIgraci.length)] as Igrac)
    igrac2.napadni(sviIgraci[Math.floor(Math.random() * sviIgraci.length)] as Igrac)
    igrac3.napadni(sviIgraci[Math.floor(Math.random() * sviIgraci.length)] as Igrac)
    if (igrac3.getZdravlje() < 50) {
        igrac3.lecenje()
    } else {
        igrac3.napadni(sviIgraci[Math.floor(Math.random() * sviIgraci.length)] as Igrac)
    }
    if (!igrac1.jeZiv()) break 
    else igrac1.napadni(sviIgraci[Math.floor(Math.random() * sviIgraci.length)] as Igrac)
    if (!igrac2.jeZiv()) break 
    else igrac2.napadni(sviIgraci[Math.floor(Math.random() * sviIgraci.length)] as Igrac)
    if (!igrac3.jeZiv()) break 
    else igrac3.napadni(sviIgraci[Math.floor(Math.random() * sviIgraci.length)] as Igrac)
}

const pobednik = sviIgraci.find(igrac => igrac.jeZiv()) as Igrac
pobednik.levelUp()
console.log(`${pobednik.ime} je pobednik! Nivo: ${pobednik.getNivo()}`)