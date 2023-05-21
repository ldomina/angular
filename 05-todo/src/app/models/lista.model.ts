import { ListaItem } from "./lista-item.model";

export class Lista {
    id: number;
    titulo: string;
    created: Date;
    finished: Date | undefined;
    done: boolean;
    items: ListaItem[];

    constructor(titulo: string,  ){
        this.titulo = titulo;
        this.created = new Date();
        this.done = false;
        this.items = [];
        this.id = new Date().getTime();
    }
}