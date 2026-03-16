function poslednji(elniza) {
    if (elniza.length === 0)
        return null;
    return elniza[elniza.length - 1];
}
console.log(poslednji([1, 2, 3, 4]));
console.log(poslednji([]));
