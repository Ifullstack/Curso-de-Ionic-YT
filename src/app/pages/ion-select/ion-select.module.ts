import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonSelectPageRoutingModule } from './ion-select-routing.module';

import { IonSelectPage } from './ion-select.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonSelectPageRoutingModule
  ],
  declarations: [IonSelectPage]
})
export class IonSelectPageModule {}
