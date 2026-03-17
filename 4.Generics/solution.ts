interface Autor {
    ime: string;
    email: string;
    bio?: string;
}

interface BlogPost {
    naslov: string;
    sadrzaj: string;
    brojPregleda: number;
    ocena: number | null;
    autor: Autor;
    statusObjave: StatusObjave;
}

type StatusObjave = "draft" | "published" | "archived"

function poslednji<T> (elniza: T[]): T | null {
    if (elniza.length === 0) return null
    return elniza[elniza.length - 1] ?? null
} 

console.log(poslednji([1, 2, 3, 4]))
console.log(poslednji([]))

function ukloniDuplikate<T> (niz: T[]): T[] {
    return Array.from(new Set(niz))
}

console.log(ukloniDuplikate([1, 2, 1, 5, 6, 2, 2, 4, 1, 3, 5, 7, 9]))