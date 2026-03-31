class Automobil {
    private marka: string
    private godiste: number

    constructor (marka: string, godiste: number) {
        this.marka = marka
        this.godiste = godiste
    }

    ispisi (): string {
        return `imam automobil marke ${this.marka}, godiste ${this.godiste}`
    }
}   

const auto1 = new Automobil ('bmw', 2015) 
console.log(auto1.ispisi())