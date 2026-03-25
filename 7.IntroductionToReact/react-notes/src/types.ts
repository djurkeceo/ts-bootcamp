type Boje = 'red' | 'green' | 'blue' | 'orange'

export interface Notes {
    readonly id: number;
    naslov: string;
    sadrzaj: string;
    boja: Boje;
    datumKreiranja: string;
}
