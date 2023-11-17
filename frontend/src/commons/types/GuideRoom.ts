import { Bedroom } from "./Bedroom";

export type GuideRoom = {
    numero: number;
    nome: string;
    status: string;
    id: number;
    leitos: Bedroom[];
}