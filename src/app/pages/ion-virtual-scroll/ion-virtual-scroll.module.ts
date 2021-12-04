import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonVirtualScrollPageRoutingModule } from './ion-virtual-scroll-routing.module';

import { IonVirtualScrollPage } from './ion-virtual-scroll.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonVirtualScrollPageRoutingModule
  ],
  declarations: [IonVirtualScrollPage]
})
export class IonVirtualScrollPageModule {}
