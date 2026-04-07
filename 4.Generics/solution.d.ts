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
interface BlogPostWithID extends BlogPost {
    id: number;
}
type StatusObjave = "draft" | "published" | "archived";
declare function poslednji<T>(elniza: T[]): T | null;
declare function ukloniDuplikate<T>(niz: T[]): T[];
interface ApiOdgovor<T> {
    success: boolean;
    data: T;
    statusCode?: string | null;
}
declare const odgovorNaBlog: ApiOdgovor<BlogPostWithID>;
declare const odgovorNaBlogNiz: ApiOdgovor<BlogPostWithID[]>;
declare const spavaj: (ms: number) => Promise<unknown>;
declare function proveriOdgovor<T>(): Promise<ApiOdgovor<T>>;
declare const odgovor: ApiOdgovor<unknown>;
//# sourceMappingURL=solution.d.ts.map