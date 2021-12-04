import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonSlidesPageRoutingModule } from './ion-slides-routing.module';

import { IonSlidesPage } from './ion-slides.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonSlidesPageRoutingModule
  ],
  declarations: [IonSlidesPage]
})
export class IonSlidesPageModule {}
