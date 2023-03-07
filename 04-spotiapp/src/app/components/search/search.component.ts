import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  artists:any[] = [];
  loading:boolean = false;
  constructor(private spotify:SpotifyService) {
  }
  buscar(termino:string){
    this.loading = true
    if (termino.length > 0){
      this.spotify.getArtists(termino)
        .subscribe((data:any) =>{
          console.log(data);
          this.artists = data;
          this.loading = false;
        })
    } else {
      this.loading = false;
      this.artists = [];
    }
  }
}
