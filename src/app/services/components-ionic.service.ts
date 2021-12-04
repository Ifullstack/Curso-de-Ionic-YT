import { Injectable } from '@angular/core';
import { ActionSheetController, AlertController } from '@ionic/angular';

import { Developer } from '../models/models.interface';

@Injectable({
  providedIn: 'root'
})
export class ComponentsIonicService {

  accion:string = 'ninguna';
  developer = {} as Developer;

  constructor(  public actionSheetController: ActionSheetController,
                public alertController: AlertController 
              ) { }

  async presentarActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Este es un Action Sheet de prueba',
      animated:false,
      backdropDismiss:true,
      mode:'ios',
      buttons: 
      [
      {
        text: 'Borrar',
        role: 'destructive',
        icon: 'close-circle',
        
        handler: () => {
          this.accion = 'Borrar';
          console.log('Delete clicked');
        }
      }, {
        text: 'Compartir',
        icon: 'share',
        handler: () => {
          this.accion = 'Compartir';
          console.log('Share clicked');
        }
      }, {    
        text: 'Play (open modal)',
        icon: 'arrow-redo-circle-outline',
        handler: () => {
          this.accion = 'hacer Play';
          console.log('Play clicked');
        }
      }, {
        text: 'Favoritos',
        icon: 'heart',
        handler: () => {
          this.accion = 'añadir a favoritos';
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          this.accion = 'cancelar';
          console.log('Cancel clicked');
        }
      }
    ]
    });
    
    await actionSheet.present();
   
  }

  async presentAlertaConfirmar() {
    const alert = await this.alertController.create({
      header: 'Confirmar algo!',
      message: 'Por favor confirma aquello',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      header: 'Escribir información',
      message: 'Por favor escribe la información del desarrollador',
      inputs: [
        {
          name: 'nombre',
          type: 'text',
          placeholder: 'Escribe tu nombre:'
        },
        {
          name: 'descripcion',       
          type: 'textarea',
          placeholder: 'Escribe a que te dedicas:'
        },
        {
          name: 'fechaDeInicio',
          type: 'date'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: ( developer:Developer ) => {
            
            this.developer = developer;
            console.log('Confirm Ok',this.developer);
          }
        }
      ]
    });

    await alert.present();
  }

  
}
