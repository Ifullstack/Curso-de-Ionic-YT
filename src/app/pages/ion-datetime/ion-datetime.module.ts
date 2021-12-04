import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonDatetimePageRoutingModule } from './ion-datetime-routing.module';

import { IonDatetimePage } from './ion-datetime.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonDatetimePageRoutingModule
  ],
  declarations: [IonDatetimePage]
})
export class IonDatetimePageModule {}
