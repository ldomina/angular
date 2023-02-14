import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { registerLocaleData } from '@angular/common';
import localeAr from '@angular/common/locales/es-AR';
import localePt from '@angular/common/locales/pt';

import { AppComponent } from './app.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { ContrasenaPipe } from './pipes/contrasena.pipe';

// Registro los idiomas que va a manejar mi app
registerLocaleData(localeAr);
registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    CapitalizePipe,
    DomseguroPipe,
    ContrasenaPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es-AR',
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
