import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  releases:any[] = [];
  loading:boolean = true; 
  error:boolean = false;
  errorMessage:string ='';

  constructor(private spotify: SpotifyService) {
    this.spotify.getNewReleases()
      .subscribe({
        next: (data:any) => {
        console.log(data);
        this.releases = data;
        this.loading = false;

      },
        error: (err:any) => { 
          this.loading = false;
          this.error = true;
          this.errorMessage = err.error.error.message;
        }
      });
  }
  
}
