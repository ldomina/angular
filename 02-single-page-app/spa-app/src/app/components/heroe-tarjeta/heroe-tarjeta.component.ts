import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent {
  @Input() heroe:any ={};
  @Input() index:number = 0;

  @Output() selectedHero:EventEmitter<number>;

  constructor(private _router:Router) { 
    this.selectedHero = new EventEmitter();
  }
  handleClick () {
    this._router.navigate(['/heroe', this.index]);
    //Manda al padre el index (comunicacion hijo padre)
    //this.selectedHero.emit(this.index);
  }
}
