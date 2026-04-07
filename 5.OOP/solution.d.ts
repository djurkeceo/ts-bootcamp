declare class Igrac {
    ime: string;
    protected zdravlje: number;
    private nivo;
    constructor(ime: string, zdravlje?: number);
    napadni(protivnik: Igrac): void;
    primiStetu(steta: number): void;
    getZdravlje(): number;
    getNivo(): number;
    jeZiv(): boolean;
    levelUp(): void;
}
declare class Ratnik extends Igrac {
    private oklop;
    constructor(ime: string, oklop: number);
    primiStetu(steta: number): void;
}
declare class Mag extends Igrac {
    private mana;
    constructor(ime: string, mana: number);
    magijaNapad(protivnik: Igrac): void;
}
declare class Lekar extends Igrac {
    lecenje(): void;
}
declare const igrac1: Igrac;
declare const igrac2: Mag;
declare const igrac3: Lekar;
declare const sviIgraci: Igrac[];
declare const pobednik: Igrac;
//# sourceMappingURL=solution.d.ts.map