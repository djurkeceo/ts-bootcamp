let naslov: string;
let broj_pregleda: number;
let objavljen: boolean;
let tagovi: string[];
let tagovi2: Array<string>;
let ocena: (number | null)[];
let ocena2: Array<number | null>;

const status1: "draft" | "archived" | "published" = "published";

let RGB: [red: number, green: number, blue: number] = [255, 0, 150];

console.log(RGB);
/**
 * bonus izazov 
 * ------------
 * 1. razlog - zato sto dolazi do komplikacije kada na red dodje izracunavanje proseka ocena
 */