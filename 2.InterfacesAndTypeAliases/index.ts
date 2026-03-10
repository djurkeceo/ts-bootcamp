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

const mojPost: BlogPost = {
    naslov: "Suboticke ulice",
    sadrzaj: "ovo su suboticke ulice",
    brojPregleda: 15000,
    ocena: 9.4,
    autor: {
        ime: "Angelina",
        email: "angelinakis@mail.com"
    },
    statusObjave: "published"
}

console.log(mojPost)