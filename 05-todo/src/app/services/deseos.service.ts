import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {
  listas: Lista[] = [];
  constructor() {
    console.log('Service Up');
    this.cargarStorage();
  }

  crearLista(titulo:string){
    const nuevaLista = new Lista(titulo);
    this.listas.push(nuevaLista);
    this.guardarStorage();
    return nuevaLista.id;
  }

  obtenerLista(id:string|number){
    id = Number(id);
    return this.listas.find(lista => lista.id === id); //retorna la lista que cumple la condicion
  }

  guardarStorage() {
    localStorage.setItem('data', JSON.stringify(this.listas));
  }

  cargarStorage(){
    if (localStorage.getItem('data') !== null ){
      const fromStorage = localStorage.getItem('data')
      this.listas = JSON.parse(fromStorage?fromStorage:'');
    } else {
      this.listas = [];
    }
  }

  borrarLista(lista:Lista){
    this.listas = this.listas.filter(listData => {
      return listData.id !== lista.id;
    });//me devuelte todos los elementos que coinciden con la condicion, es decir, ahora listas tiene a todas las listas menos a la que vino por parametro
    this.guardarStorage();
  }
}
