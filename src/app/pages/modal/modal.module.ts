import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalPageRoutingModule } from './modal-routing.module';

import { ModalPage } from './modal.page';

//Modal
import { MyModalPage } from '../my-modal/my-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalPageRoutingModule
  ],
  declarations: [
    ModalPage,
    MyModalPage
  ],
  entryComponents:[
    MyModalPage
  ]
})
export class ModalPageModule {}
