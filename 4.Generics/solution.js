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
        ID: Math.floor(Math.random() * 100),
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
    error: '500'
};
var odgovorNaBlogNiz = {
    success: true,
    data: [{
            ID: Math.floor(Math.random() * 100),
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
            ID: Math.floor(Math.random() * 100),
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
    error: '500'
};
// function kreitajOdgovor<T>(data: T): ApiOdgovor<T> {
//     return 
// }
console.log(odgovorNaBlog);
console.log(odgovorNaBlogNiz.data[0]);
