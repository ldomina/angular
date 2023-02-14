import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre:string = 'Capitan America';
  nombre2:string = 'leAndRO DoMinA'
  arreglo = [1,2,3,4,5,6,7,8,9,10];
  pi:number = Math.PI;
  porcentaje:number = 0.427;
  salario:number = 2500.5;
  heroe = {
    nombre: 'logan',
    clave: 'wolverine',
    casa: 'marvel',
    direccion: {
      calle: 'primera',
      numero: 20 
    }
  };
  valorPromesa = new Promise<string>((resolve => {
    setTimeout (() => {
      resolve('llego la data');
    }, 4500);
  }));
  fecha:Date = new Date();
  idioma: string = 'es-AR';
  videoUrl:string ='https://www.youtube.com/embed/7NK_JOkuSVY';
  activar:boolean = true;
}
