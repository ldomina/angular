import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

//importar rutas
import { ROUTES } from './app.routes';

//Pipes
import { NoimagePipe } from './pipes/noimage.pipe';
import { MsToMinPipe } from './pipes/ms-to-min.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
import { LoadingComponent } from './components/shared/loading/loading.component';

//Services
//import { SpotifyService } from './services/spotify.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistaComponent,
    NavbarComponent,
    NoimagePipe,
    TarjetasComponent,
    LoadingComponent,
    MsToMinPipe,
    DomseguroPipe,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot( ROUTES, {useHash: true} ),
    HttpClientModule,
  ],
  //en los providers se importan los servicios (a APIs por ej)
  providers: [ /*SpotifyService*/ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
