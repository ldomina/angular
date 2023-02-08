// Para que angular lo reconozca como componente tengo que hacer esta importacion
import {Component} from '@angular/core';

@Component({
    selector: 'app-header', // Nombre de la etiqueta con la que lo voy a cargar en el html
    templateUrl: './header.component.html', // Vista del componente, puede ser una url a un .html
})
export class HeaderComponent {

}