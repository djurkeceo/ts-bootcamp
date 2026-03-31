export type PrioritetZadatka = 'nizak' | 'srednji'| 'visok';
export type StatusZadataka = 'todo' | 'u-toku' | 'zavrseno';

export interface Zadatak {
  readonly id: number;
  naziv: string;
  opis: string;
  prioritet: PrioritetZadatka;
  status: StatusZadataka;
  datumKreiranja: string
}