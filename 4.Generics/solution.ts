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

type StatusObjave = "draft" | "published" | "archived";

function poslednji<T> (elniza: T[]): T | null {
    if (elniza.length === 0) return null;
    return elniza[elniza.length - 1];
} 

console.log(poslednji([1, 2, 3, 4]));
console.log(poslednji([]))

