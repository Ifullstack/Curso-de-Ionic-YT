import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonToolbarPageRoutingModule } from './ion-toolbar-routing.module';

import { IonToolbarPage } from './ion-toolbar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonToolbarPageRoutingModule
  ],
  declarations: [IonToolbarPage]
})
export class IonToolbarPageModule {}
