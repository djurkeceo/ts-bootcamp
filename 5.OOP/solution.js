var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vozilo = /** @class */ (function () {
    function Vozilo(vrstaVozila, brojSedista) {
        this.vrstaVozila = vrstaVozila;
        this.brojSedista = brojSedista;
    }
    Vozilo.prototype.prikaziInfo = function () {
        return "Vrsta vozila: ".concat(this.vrstaVozila, ", Broj sedista: ").concat(this.brojSedista);
    };
    return Vozilo;
}());
var Automobil = /** @class */ (function (_super) {
    __extends(Automobil, _super);
    function Automobil(markaAutomobila, godisteAutomobila, brojSedista) {
        var _this = _super.call(this, 'Automobil', brojSedista) || this;
        _this.markaAutomobila = markaAutomobila;
        _this.godisteAutomobila = godisteAutomobila;
        return _this;
    }
    Automobil.prototype.prikaziInfo = function () {
        return "".concat(_super.prototype.prikaziInfo.call(this), ", Marka automobila: ").concat(this.markaAutomobila, ", Godiste automobila: ").concat(this.godisteAutomobila);
    };
    return Automobil;
}(Vozilo));
var vozilo1 = new Vozilo('Kamion', 3);
console.log(vozilo1.prikaziInfo());
var automobil1 = new Automobil('Audi', 2015, 5);
console.log(automobil1.prikaziInfo());
