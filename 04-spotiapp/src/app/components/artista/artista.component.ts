import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent {
  artista:any = {};
  loading:boolean = true;
  topTracks:any[] = [];
  constructor(private router: ActivatedRoute, private spotify: SpotifyService) {
    this.router.params.subscribe( params => { //los params recibidos por url en este caso :id
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
    })
  };

  getArtista(id:string){
    this.spotify.getArtist(id)
      .subscribe(data => {
        this.artista = data;
        console.log(this.artista);
        
        this.loading = false;
      })
  };

  getTopTracks(id:string){
    this.spotify.getTopTracks(id)
      .subscribe(data => {
        this.topTracks = data
      })
  }
  
}
