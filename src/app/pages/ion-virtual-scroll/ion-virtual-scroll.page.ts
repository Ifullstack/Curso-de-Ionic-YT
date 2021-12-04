import { Component, OnInit } from '@angular/core';

//Componente
import { LoadingController } from '@ionic/angular';

export interface Mensajes {
  id:string;
  nombre:string;
  avatar:string;
  mensaje:string;
}

@Component({
  selector: 'app-ion-virtual-scroll',
  templateUrl: './ion-virtual-scroll.page.html',
  styleUrls: ['./ion-virtual-scroll.page.scss'],
})
export class IonVirtualScrollPage implements OnInit {

  mensajesMostrar = [];

  mensajesDesdeBD:Mensajes[] = [
    { 
      id:'01',
      avatar:'https://images.unsplash.com/photo-1596079320155-cdcc0eaba088?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', 
      nombre:'Maria',
      mensaje:'Hola como va la cosa por allá'
    },
    { 
      id:'02',
      avatar:'https://images.unsplash.com/photo-1596124579928-4bf06a8adfef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', 
      nombre:'Dybala',
      mensaje:'Oye vamos a jugar a la Play si o no?'
    },
    { 
      id:'03',
      avatar:'https://images.unsplash.com/photo-1596107035758-b35ebdb15c9c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', 
      nombre:'Agropecuaria',
      mensaje:'Vas a comprar leche esta semana?'
    }
  ];

  skeletonData = [1,1,1,1,1,1];

  todo_cargado:boolean = false;
  
  constructor( public loadingController: LoadingController ) {}

  ngOnInit() {
    //this.mostrarLoading();


    setTimeout(() => {
      this.mensajesDesdeBD.forEach( ( mensaje:Mensajes ) => {
        this.mensajesMostrar.push(mensaje);  
        this.todo_cargado = true;
      });
    }, 7000);


    
  }

  async mostrarLoading( ) {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Espera por favor...',
      duration: 4000,
      spinner:'crescent'
    });
    await loading.present();
  }

}//Clase
