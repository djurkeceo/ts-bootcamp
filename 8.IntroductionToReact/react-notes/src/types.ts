export type Boje = 'indigo' | 'red' | 'green' | 'blue' | 'orange' | 'purple'

export interface Notes {
    readonly id: number;
    naslov: string;
    sadrzaj: string;
    boja: Boje;
    datumKreiranja: string;
}
