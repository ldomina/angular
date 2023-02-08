import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {
  heroe:any={};
  constructor(private _activatedRoute:ActivatedRoute, private _heroeService:HeroesService) {

    this._activatedRoute.params.subscribe(params => {
      console.log(params['id']);
      this.heroe = this._heroeService.getHeroe(params['id'])
    });   
  }
}
