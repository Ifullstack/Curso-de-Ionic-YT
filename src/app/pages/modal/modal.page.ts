import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

//page
import { MyModalPage } from '../my-modal/my-modal.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor( public modalController: ModalController ) { }

  ngOnInit() {
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: MyModalPage,
      cssClass: 'my-class-modal',
      componentProps: {
        'nombre': 'Cané',
        'apellidos': 'Allesta',
      }
    });

    return await modal.present();
  }

}
