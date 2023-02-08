import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  heroe:any = {};
  constructor(
    private _router:Router
  ) {
  }

  buscarHeroe(search:string){
    this._router.navigate(['/search', search]);
  }
}
