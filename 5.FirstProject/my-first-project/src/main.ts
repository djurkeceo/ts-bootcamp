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

function renderujPostove(postovi: BlogPost[]): void {
    const app = document.querySelector<HTMLDivElement>("#app");
    if (!app) return;

    app.innerHTML = `
        <h1>📝 Blog Post Manager</h1>
        ${postovi.map(prikaziPost).join("")}
    `;
}

function filtrirajPostove(postovi: BlogPost[], status: StatusObjave) {
        const app = document.querySelector<HTMLDivElement>("#app");
        if (!app) return;

        const filtriraniPostovi = postovi.filter(post => post.statusObjave === status)

        console.log(filtriraniPostovi)

        if (filtriraniPostovi.length === 0) {
            app.innerHTML = prikaziPrazanPost();
        } else {
            renderujPostove(filtriraniPostovi);
        }
}

const draftBtn = document.querySelector<HTMLButtonElement>('#draftBtn')
const sviBtn = document.querySelector<HTMLButtonElement>('#sviBtn')
const publishedBtn = document.querySelector<HTMLButtonElement>('#publishedBtn')

sviBtn?.addEventListener('click', () => {
    renderujPostove(postovi)
})

draftBtn?.addEventListener('click', () => {
    const inner = draftBtn.innerText as StatusObjave
    filtrirajPostove(postovi, inner)
})

publishedBtn?.addEventListener('click', () => {
    const inner = publishedBtn.innerText as StatusObjave
    filtrirajPostove(postovi, inner)
})