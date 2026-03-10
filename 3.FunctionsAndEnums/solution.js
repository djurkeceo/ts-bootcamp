"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogPostDefault = void 0;
var mojPost = {
    naslov: "Suboticke ulice",
    sadrzaj: "Ovo su suboticke ulice...",
    brojPregleda: 15000,
    ocena: 9.4,
    autor: {
        ime: "Angelina",
        email: "angelinakis@mail.com"
    },
    statusObjave: "published"
};
var kreirajImeAutora = function (ime, email, bio) {
    return {
        ime: ime,
        email: email,
        bio: bio
    };
};
console.log(kreirajImeAutora('Djurke', 'djurke@me.com', ''));
console.log();
exports.BlogPostDefault = {
    naslov: '',
    sadrzaj: '',
    brojPregleda: 0,
    ocena: null,
    autor: {
        ime: '',
        email: ''
    },
    statusObjave: 'draft'
};
var kreirajPost = function (naslov, sadrzaj, autor) {
    return {
        id: Math.floor(Math.random() * 1000),
        naslov: naslov,
        sadrzaj: sadrzaj,
        brojPregleda: exports.BlogPostDefault.brojPregleda,
        ocena: exports.BlogPostDefault.ocena,
        autor: autor,
        statusObjave: exports.BlogPostDefault.statusObjave
    };
};
var kreiranPost = kreirajPost('Subotica kao najlepsi grad u Srbiji', 'Suboticke ulice su...', { ime: 'djurke', email: 'djurke@me.com' });
// console.log(kreirajPost('Subotica kao najlepsi grad u Srbiji', 'Suboticke ulice su...', {ime: 'djurke', email: 'djurke@me.com'}));
console.log(kreiranPost);
var objaviPost = function (post) {
    return __assign(__assign({}, post), { statusObjave: 'published' });
};
console.log(objaviPost(kreiranPost));
// const prikaziSumiranjePostova = (postovi: BlogPost[]): BlogPost[] => {
// }
