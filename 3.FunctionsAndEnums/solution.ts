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

console.log(kreirajImeAutora('Djurke', 'djurke@me.com'))
console.log('---')

const BLOG_POST_DEFAULTS = {
    brojPregleda: 0,
    ocena: null,
    statusObjave: "draft"
} as const;

interface BlogPostWithID extends BlogPost {
    readonly id: string | number
}

const kreirajPost = (naslov: string, sadrzaj: string, autor: Autor): BlogPostWithID => {
    return {
        id: Math.floor(Math.random() * 1000),
        naslov,
        sadrzaj,
        brojPregleda: BLOG_POST_DEFAULTS.brojPregleda,
        ocena: BLOG_POST_DEFAULTS.ocena,
        autor,
        statusObjave: BLOG_POST_DEFAULTS.statusObjave
    }
}

const kreiranPost = kreirajPost('Subotica kao najlepsi grad u Srbiji', 'Suboticke ulice su...', {ime: 'djurke', email: 'djurke@me.com'})
console.log(kreiranPost)
console.log('---')

const objaviPost = (post: BlogPost): BlogPost => {
    return {
        ...post,
        statusObjave: 'published'
    }
}

console.log(objaviPost(kreiranPost))
console.log('---')

const prikaziSumiranjePostova = (postovi: BlogPostWithID[]) => {
    let brojPostova = postovi.filter(p => { p.statusObjave === 'published' }).length

    const ocenjeniPostovi = postovi.filter((post): post is BlogPostWithID & { ocena: number } => 
    post.ocena !== null
    )

    const prosecnaOcena = ocenjeniPostovi.length > 0
        ? ocenjeniPostovi.reduce((suma, post) => suma + post.ocena, 0) / ocenjeniPostovi.length
        : 0

        
    if(brojPostova === 0) console.log('Nema postova za prikazati.')

    else console.log(`Niz blogova: ${JSON.stringify(postovi[0], null, 2)}
                    , broj postova: ${brojPostova}
                    , prosecna ocena: ${prosecnaOcena}`)
}

prikaziSumiranjePostova([kreiranPost])