import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  heroes:any[] = [];
  constructor(
    private _activatedRoute:ActivatedRoute,
    private _heroesService:HeroesService,
    private _router:Router
  ) {
    this._activatedRoute.params.subscribe(params => {
      console.log(params['search']);
      this.heroes = this._heroesService.searchHeroe(params['search']);
      console.log(this.heroes);
    });  
  }

  handleClick(name:string){
    name = name.toLowerCase();
    let index;
    let allHeroes = this._heroesService.getHeroes();
    allHeroes.forEach((hero, pos) => {
      if (hero.nombre.toLowerCase() == name){
        index = pos;
      }
    });
    this._router.navigate(['/heroe', index]);
  }
}
