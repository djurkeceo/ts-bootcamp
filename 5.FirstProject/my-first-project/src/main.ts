type StatusObjave = "draft" | "published" | "archived";

interface Autor {
    ime: string;
    email: string;
}

interface BlogPost {
    readonly id: number;
    naslov: string;
    sadrzaj: string;
    autor: Autor;
    statusObjave: StatusObjave;
    ocena: number | null;
}

const postovi: BlogPost[] = [
    {
        id: 1,
        naslov: "Uvod u TypeScript",
        sadrzaj: "TypeScript je JavaScript sa tipovima...",
        autor: { ime: "Djurke", email: "djurke@me.com" },
        statusObjave: "published",
        ocena: 9.2
    },
    {
        id: 2,
        naslov: "Vite za početnike",
        sadrzaj: "Vite je moderni build tool...",
        autor: { ime: "Djurke", email: "djurke@me.com" },
        statusObjave: "draft",
        ocena: null
    },
    {
        id: 3,
        naslov: "Zašto koristiti interfaces",
        sadrzaj: "Interfaces su temelj dobrog TS koda...",
        autor: { ime: "Djurke", email: "djurke@me.com" },
        statusObjave: "archived",
        ocena: 7.5
    }
];

// const postoviSaOcenom = postovi.filter(post => post.ocena !== null)
// const ukupanBrojPostova = postoviSaOcenom.length
// // const sumaOcena: number = postoviSaOcenom.reduce((suma, post) => {
// //     return suma + (post.ocena || 0)
// // }, 0)

// console.log(`${sumaOcena}, ${ukupanBrojPostova}`)

function prikaziPost(post: BlogPost): string {
    const ocena = post.ocena !== null ? `⭐ ${post.ocena}` : "Nije ocenjeno";

    return `
        <div class="post-card">
            <h2>${post.naslov}</h2>
            <p>${post.sadrzaj}</p>
            <p>Autor: ${post.autor.ime} — ${ocena}</p>
            <span class="status ${post.statusObjave}">${post.statusObjave}</span>
        </div>
    `;
}

function prikaziPrazanPost(): string {
    return `
        <h1>
            Ne postoji post sa ovim statusom
        </h1>
    `
}

function renderujPostove(postovi: BlogPost[], ocena: number | string = 'NaN'): string {
    const app = document.querySelector<HTMLDivElement>("#app");
    if (!app) return 'Ne postoji div';

    return app.innerHTML = `
        <h1>📝 Blog Post Manager</h1>
        <h2>Prosecna ocena postova je ${ocena}</h2>
        ${postovi.map(prikaziPost).join("")}
    `;
}

function filtrirajPostove(postovi: BlogPost[], status: StatusObjave) {
        const app = document.querySelector<HTMLDivElement>("#app");
        if (!app) return;

        const filtriraniPostovi = postovi.filter(post => post.statusObjave === status)
        const filtriraniPostoviSaOcenom = filtriraniPostovi.filter(post => post.ocena !== null)
        const brojFiltriranihPostovaSaOcenom = filtriraniPostoviSaOcenom.length

        const prosecnaOcena: number = filtriraniPostoviSaOcenom.reduce((suma, post) => {
            return suma + (post.ocena || 0)
        }, 0) / brojFiltriranihPostovaSaOcenom
  
        
        if (filtriraniPostovi.length === 0) {
            app.innerHTML = prikaziPrazanPost();
        } else {
            renderujPostove(filtriraniPostovi, prosecnaOcena);
        }
}

const draftBtn = document.querySelector<HTMLButtonElement>('#draftBtn')
const sviBtn = document.querySelector<HTMLButtonElement>('#sviBtn')
const publishedBtn = document.querySelector<HTMLButtonElement>('#publishedBtn')

sviBtn?.addEventListener('click', () => {
    const postoviSaOcenom = postovi.filter(post => post.ocena !== null)
    const brojPostovaSaOcenom = postoviSaOcenom.length

    const prosecnaOcena: number = postoviSaOcenom.reduce((suma, post) => {
            return suma + (post.ocena || 0)
        }, 0) / brojPostovaSaOcenom

    renderujPostove(postovi, prosecnaOcena)
})

draftBtn?.addEventListener('click', () => {
    const inner = draftBtn.innerText.toLowerCase() as StatusObjave
    filtrirajPostove(postovi, inner)
})

publishedBtn?.addEventListener('click', () => {
    const inner = publishedBtn.innerText.toLowerCase() as StatusObjave
    filtrirajPostove(postovi, inner)
})