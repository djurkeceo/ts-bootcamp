var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
function poslednji(elniza) {
    var _a;
    if (elniza.length === 0)
        return null;
    return (_a = elniza[elniza.length - 1]) !== null && _a !== void 0 ? _a : null;
}
console.log(poslednji([1, 2, 3, 4]));
console.log(poslednji([]));
function ukloniDuplikate(niz) {
    return Array.from(new Set(niz));
}
console.log(ukloniDuplikate([1, 2, 1, 5, 6, 2, 2, 4, 1, 3, 5, 7, 9]));
var odgovorNaBlog = {
    success: true,
    data: {
        id: Math.floor(Math.random() * 100),
        naslov: 'Suboticke ulice',
        sadrzaj: 'Suboticke ulice su prelepe...',
        brojPregleda: 15000,
        ocena: null,
        autor: {
            ime: 'Djurke',
            email: 'djurkeceo@me.com',
        },
        statusObjave: 'draft'
    },
    statusCode: '500'
};
var odgovorNaBlogNiz = {
    success: false,
    data: [{
            id: Math.floor(Math.random() * 100),
            naslov: 'Suboticke ulice 1',
            sadrzaj: 'Suboticke ulice 1 su prelepe...',
            brojPregleda: 1400,
            ocena: null,
            autor: {
                ime: 'Djurke1',
                email: 'djurkeceo1@me.com',
            },
            statusObjave: 'published'
        },
        {
            id: Math.floor(Math.random() * 100),
            naslov: 'Suboticke ulice 2',
            sadrzaj: 'Suboticke ulice 2 su prelepe...',
            brojPregleda: 2500,
            ocena: null,
            autor: {
                ime: 'Djurke2',
                email: 'djurkeceo2@me.com',
            },
            statusObjave: 'archived'
        }],
    statusCode: '500'
};
var spavaj = function (ms) { return new Promise(function (resolve) { return setTimeout(resolve, ms); }); };
function proveriOdgovor() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, spavaj(2000)];
                case 1:
                    _a.sent();
                    return [2 /*return*/, __assign(__assign({}, odgovorNaBlogNiz), { success: true, statusCode: '200' })];
            }
        });
    });
}
console.log('---');
if (odgovorNaBlog.statusCode === '500')
    console.log("\n    Nije moguce pristupiti blogovima, (error code: ".concat(odgovorNaBlog.statusCode, ")"));
else if (odgovorNaBlog.statusCode === '404')
    console.log("\n    Nije moguce pristupiti blogovima, (error code: ".concat(odgovorNaBlog.statusCode, ")"));
else
    console.log(odgovorNaBlog);
console.log('---');
console.log(odgovorNaBlogNiz);
console.log('---');
var odgovor = await proveriOdgovor();
console.log(odgovor);
console.log('Server je pokrenut, blogovi su vidljivi');
