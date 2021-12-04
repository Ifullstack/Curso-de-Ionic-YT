import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonSearchbarPageRoutingModule } from './ion-searchbar-routing.module';

import { IonSearchbarPage } from './ion-searchbar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonSearchbarPageRoutingModule
  ],
  declarations: [IonSearchbarPage]
})
export class IonSearchbarPageModule {}
