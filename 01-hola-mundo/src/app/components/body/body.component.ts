// Para que angular lo reconozca como componente tengo que hacer esta importacion
import {Component} from '@angular/core';

@Component({
    selector: 'app-body', // Nombre de la etiqueta con la que lo voy a cargar en el html
    templateUrl: './body.component.html', // Vista del componente, puede ser una url a un .html
})
export class BodyComponent {

    mostrar: boolean = true;

    frase : any = {
        mensaje: 'En tu tutu puse mi toto.',
        autor: 'La Joaqui'
    };

    personajes: string[] = ['La Joaqui', 'Duki', 'Dillom', 'Biza', 'Tu Mama'];
}