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
