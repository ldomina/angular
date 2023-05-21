import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonList } from '@ionic/angular';
import { Lista } from 'src/app/models/lista.model';
import { DeseosService } from 'src/app/services/deseos.service';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent  implements OnInit {

  @ViewChild(IonList) lista: IonList | undefined;
  @Input() terminada = true;

  constructor(
    public deseosService: DeseosService, 
    private router: Router, 
    private alertCtrl:AlertController
  ) { }

  listaSeleccionada(lista: Lista){
    if (this.terminada){
      this.router.navigateByUrl(`tabs/tab2/agregar/${lista.id}`)
    } else {
      this.router.navigateByUrl(`tabs/tab1/agregar/${lista.id}`)
    }
  }

  borrarLista(lista:Lista){
    this.deseosService.borrarLista(lista);
  }

  async editarLista(list:Lista){
    const alert = await this.alertCtrl.create({
      header: 'Editar lista',
      /* buttons: ['Cancel','OK'], */
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Canceled');
            if(this.lista){
              this.lista.closeSlidingItems();
            }
          }
        },
        {
          text: 'Guardar',
          handler: (data) => {
            if(data.titulo.length === 0){
              return;
            }
            list.titulo = data.titulo;
            this.deseosService.guardarStorage();
            if(this.lista){
              this.lista.closeSlidingItems();
            }
          }
        }
      ],
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          value: list.titulo,
          placeholder: 'Nombre de la lista',

        }
      ]
    });
    await alert.present();
  }

  ngOnInit() {}

}
