class Vozilo {
    protected vrstaVozila: string
    protected brojSedista: number

    constructor (vrstaVozila: string, brojSedista: number) {
        this.vrstaVozila = vrstaVozila
        this.brojSedista = brojSedista
    }
    
    prikaziInfo (): string {
        return `Vrsta vozila: ${this.vrstaVozila}, Broj sedista: ${this.brojSedista}`
    }
}  

class Automobil extends Vozilo {
    private markaAutomobila: string
    private godisteAutomobila: number

    constructor (markaAutomobila: string, godisteAutomobila: number, brojSedista: number) {
        super('Automobil', brojSedista)
        this.markaAutomobila = markaAutomobila
        this.godisteAutomobila = godisteAutomobila
    }

    prikaziInfo (): string {
        return `${super.prikaziInfo()}, Marka automobila: ${this.markaAutomobila}, Godiste automobila: ${this.godisteAutomobila}`
    }
}

const vozilo1 = new Vozilo ('Kamion', 3)
console.log(vozilo1.prikaziInfo())
const automobil1 = new Automobil ('Audi', 2015, 5)
console.log(automobil1.prikaziInfo())