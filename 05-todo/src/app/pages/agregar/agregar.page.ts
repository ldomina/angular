import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListaItem } from 'src/app/models/lista-item.model';
import { Lista } from 'src/app/models/lista.model';
import { DeseosService } from 'src/app/services/deseos.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  lista: any;
  nombreItem = '';

  constructor(private deseosService: DeseosService, private route: ActivatedRoute) { 
    const listaId = this.route.snapshot.paramMap.get('listaId'); // para leer el argumento que se manda por url con ese nombre
    if (listaId){
      const lista_ = this.deseosService.obtenerLista(listaId);
      if (lista_){
        this.lista = lista_;
      }
    }
  }

  ngOnInit() {
  }

  agregarItem (){
    if(this.nombreItem.length === 0){
      return;
    }
    const nuevoItem = new ListaItem(this.nombreItem);
    this.lista?.items.push(nuevoItem);
    this.nombreItem = '';
    this.deseosService.guardarStorage();
  }

  cambioCheck(item:ListaItem){
    const pendientes = this.lista.items.filter((itemData:ListaItem) => {
      return !itemData.done;
    }).length; //me va a decir cuantos items quedan sin completar  
    if (pendientes === 0){
      if (this.lista){
        this.lista.finished = new Date();
        this.lista.done = true;
      }
    } else {
      if (this.lista){
        this.lista.finished = undefined;
        this.lista.done = false;
      }
    }
    this.deseosService.guardarStorage();
  }

  borrar(i:number) {
    this.lista.items.splice(i,1);
    this.deseosService.guardarStorage();
  }

}
