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
declare const kreirajImeAutora: (ime: string, email: string, bio?: string) => Autor;
declare const BLOG_POST_DEFAULTS: {
    readonly brojPregleda: 0;
    readonly ocena: null;
    readonly statusObjave: "draft";
};
interface BlogPostWithID extends BlogPost {
    readonly id: string | number;
}
declare const kreirajPost: (naslov: string, sadrzaj: string, autor: Autor) => BlogPostWithID;
declare const kreiranPost: BlogPostWithID;
declare const objaviPost: (post: BlogPost) => BlogPost;
declare const prikaziSumiranjePostova: (postovi: BlogPostWithID[]) => void;
//# sourceMappingURL=solution.d.ts.map