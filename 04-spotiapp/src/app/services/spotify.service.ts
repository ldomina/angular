import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  //Usando providedIn en el decorador no hace falta importar el servicio en app.modules.ts en los providers
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getQuery(query:string){
    const URL =`https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBho36HUxocwaY1sHq_GCrOTcBDJrImiMZxK1CP4FfYkzPd2TC0ETHQi-VY2gGZEmb4mTH81zqApOUrUNCF0pqnjwtHknz8WoRy_ECoKgCfhXJGJRiF'
    });
    return this.http.get(URL, {headers});
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?country=ar&limit=20')
            .pipe(map((data:any) => data.albums.items));
  };

  getArtists(termino:string){
    return this.getQuery(`search?q=${termino}&type=artist&limit=20`)
            .pipe(map((data:any) => data.artists.items));
  };

  getArtist(id:string){
    return this.getQuery(`artists/${id}`);
  };

  getTopTracks(id:string){
    return this.getQuery(`artists/${id}/top-tracks?country=ar`)
      .pipe(map((data:any) => data['tracks']));
  };
}
