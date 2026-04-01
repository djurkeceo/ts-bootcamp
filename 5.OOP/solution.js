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
var Igrac = /** @class */ (function () {
    function Igrac(ime, zdravlje) {
        if (zdravlje === void 0) { zdravlje = 100; }
        this.ime = ime;
        this.zdravlje = Math.min(zdravlje, 100);
        this.nivo = 1;
    }
    Igrac.prototype.napadni = function (protivnik) {
        var steta = Math.floor(Math.random() * 11) + 10;
        protivnik.primiStetu(steta);
    };
    Igrac.prototype.primiStetu = function (steta) {
        this.zdravlje = Math.max(0, this.zdravlje - steta);
    };
    Igrac.prototype.getZdravlje = function () {
        return this.zdravlje;
    };
    Igrac.prototype.getNivo = function () {
        return this.nivo;
    };
    Igrac.prototype.jeZiv = function () {
        return this.zdravlje > 0 ? true : false;
    };
    Igrac.prototype.levelUp = function () {
        this.nivo++;
    };
    return Igrac;
}());
var igrac1 = new Igrac('djurke', 100);
var igrac2 = new Igrac('maribor', 100);
while (igrac1.jeZiv() && igrac2.jeZiv()) {
    igrac1.napadni(igrac2);
    if (!igrac2.jeZiv())
        break;
    igrac2.napadni(igrac1);
}
var pobednik = igrac1.jeZiv() ? igrac1 : igrac2;
pobednik.levelUp();
console.log("".concat(pobednik.ime, " je pobednik! Nivo: ").concat(pobednik.getNivo()));
