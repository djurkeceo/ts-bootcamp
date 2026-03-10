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
    sadrzaj: "Ovo su suboticke ulice...",
    brojPregleda: 15000,
    ocena: 9.4,
    autor: {
        ime: "Angelina",
        email: "angelinakis@mail.com"
    },
    statusObjave: "published"
}

const kreirajImeAutora = (ime: string, email: string, bio?: string): Autor => {
    return {
        ime,
        email,
        bio
    }
}

console.log(kreirajImeAutora('Djurke', 'djurke@me.com', ''))
console.log()

export const BlogPostDefault: BlogPost = {
    naslov: '',
    sadrzaj: '',
    brojPregleda: 0,
    ocena: null,
    autor: {
        ime: '',
        email: ''
    },
    statusObjave: 'draft'
}

interface BlogPostWithID extends BlogPost {
    readonly id: string | number;
}

const kreirajPost = (naslov: string, sadrzaj: string, autor: Autor): BlogPostWithID => {
    return {
        id: Math.floor(Math.random() * 1000),
        naslov,
        sadrzaj,
        brojPregleda: BlogPostDefault.brojPregleda,
        ocena: BlogPostDefault.ocena,
        autor,
        statusObjave: BlogPostDefault.statusObjave
    }
}

console.log(kreirajPost('Subotica kao najlepsi grad u Srbiji', 'Suboticke ulice su...', {ime: 'djurke', email: 'djurke@me.com'}));

const objaviPost = (post: BlogPost): BlogPost => {
    return {
        ...post,
        statusObjave: 'published'
    }
}

console.log(objaviPost(
    kreirajPost(
        'Subotica kao najlepsi grad u Srbiji', 'Suboticke ulice su...', {ime: 'djurke', email: 'djurke@me.com'}
    )
))

// const prikaziSumiranjePostova = (postovi: BlogPost[]): BlogPost[] => {
// }