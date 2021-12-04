import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonPickerPageRoutingModule } from './ion-picker-routing.module';

import { IonPickerPage } from './ion-picker.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonPickerPageRoutingModule
  ],
  declarations: [IonPickerPage]
})
export class IonPickerPageModule {}
