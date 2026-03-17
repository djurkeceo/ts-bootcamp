function poslednji(elniza) {
    if (elniza.length === 0)
        return null;
    return elniza[elniza.length - 1] ?? null;
}
console.log(poslednji([1, 2, 3, 4]));
console.log(poslednji([]));
function ukloniDuplikate(niz) {
    return Array.from(new Set(niz));
}
console.log(ukloniDuplikate([1, 2, 1, 5, 6, 2, 2, 4, 1, 3, 5, 7, 9]));
const odgovorNaBlog = {
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
    statusCode: '500'
};
const odgovorNaBlogNiz = {
    success: false,
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
    statusCode: '500'
};
const spavaj = (ms) => new Promise(resolve => setTimeout(resolve, ms));
async function proveriOdgovor() {
    await spavaj(2000);
    return {
        ...odgovorNaBlogNiz,
        success: true,
        statusCode: '200',
    };
}
console.log('---');
if (odgovorNaBlog.statusCode === '500')
    console.log(`
    Nije moguce pristupiti blogovima, (error code: ${odgovorNaBlog.statusCode})`);
else if (odgovorNaBlog.statusCode === '404')
    console.log(`
    Nije moguce pristupiti blogovima, (error code: ${odgovorNaBlog.statusCode})`);
else
    console.log(odgovorNaBlog);
console.log('---');
console.log(odgovorNaBlogNiz);
console.log('---');
const odgovor = await proveriOdgovor();
console.log(odgovor);
console.log('Server je pokrenut, blogovi su vidljivi');
export {};
//# sourceMappingURL=solution.js.map