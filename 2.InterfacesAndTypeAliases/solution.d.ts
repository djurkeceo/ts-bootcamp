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
declare const mojPost: BlogPost;
//# sourceMappingURL=solution.d.ts.map