import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DeseosService } from 'src/app/services/deseos.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
    public deseosService: DeseosService, 
    private router: Router, 
    private alertCtrl: AlertController
  ) {}

  async agregarLista(){
    const alert = await this.alertCtrl.create({
      header: 'Nueva lista',
      /* buttons: ['Cancel','OK'], */
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Canceled');
          }
        },
        {
          text: 'Crear',
          handler: (data) => {
            if(data.titulo.length === 0){
              return;
            }
            const listaId = this.deseosService.crearLista(data.titulo);
            this.router.navigateByUrl(`tabs/tab1/agregar/${listaId}`)
          }
        }
      ],
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          placeholder: 'Nombre de la lista',

        }
      ]
      /* inputs: [
        {
          placeholder: 'Name',
        },
        {
          placeholder: 'Nickname (max 8 characters)',
          attributes: {
            maxlength: 8,
          },
        },
        {
          type: 'number',
          placeholder: 'Age',
          min: 1,
          max: 100,
        },
        {
          type: 'textarea',
          placeholder: 'A little about yourself',
        },
      ], */
    });

    await alert.present();
  }

}
