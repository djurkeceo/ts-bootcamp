var Automobil = /** @class */ (function () {
    function Automobil(marka, godiste) {
        this.marka = marka;
        this.godiste = godiste;
        this.marka = marka;
        this.godiste = godiste;
    }
    Automobil.prototype.ispisi = function () {
        return "imam automobil marke ".concat(this.marka, ", godiste ").concat(this.godiste);
    };
    return Automobil;
}());
var auto1 = new Automobil('bmw', 2015);
console.log(auto1.ispisi());
