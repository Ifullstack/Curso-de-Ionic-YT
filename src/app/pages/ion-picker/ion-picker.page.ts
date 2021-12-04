import { Component, OnInit } from '@angular/core';
import { PickerController } from '@ionic/angular';

@Component({
  selector: 'app-ion-picker',
  templateUrl: './ion-picker.page.html',
  styleUrls: ['./ion-picker.page.scss'],
})
export class IonPickerPage implements OnInit {

  constructor( public _pickerCtrl:PickerController ) { }

  ngOnInit() {
  }

  async mostrarPickerBasico() {
    const picker = await this._pickerCtrl.create({
      columns: [
        {
          name:'Mobile Frameworks',
          options:[
            { text:'Flutter',value:'flutter' },
            { text:'Ionic',value:'ionic' },
            { text:'Xamarin',value:'xamarin' }
          ]
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: ( value ) => {
            console.log('He cancelado', value);
          }
        },
        {
          text: 'Confirmar',
          handler: ( value ) => {
            console.log('He confirmado',value);
          }
        }
      ]
    });

    await picker.present();
  }

  async mostrarPickerAvanzado() {
    const picker = await this._pickerCtrl.create({
      columns: [
        {
          name:'Mobile Frameworks',
          options:[
            { text:'Flutter',value:'flutter' },
            { text:'Ionic',value:'ionic' },
            { text:'Xamarin',value:'xamarin' }
          ]
        },
        {
          name:'Web Frameworks',
          options:[
            { text:'Angular',value:'angular' },
            { text:'React',value:'react' },
            { text:'Vue',value:'vue' }
          ]
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: ( value ) => {
            console.log('He cancelado', value);
          }
        },
        {
          text: 'Confirmar',
          handler: ( value ) => {
            console.log('He confirmado',value);
          }
        }
      ]
    });

    await picker.present();
  }

}
