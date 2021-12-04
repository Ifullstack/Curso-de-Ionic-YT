import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImagenesIconosPageRoutingModule } from './imagenes-iconos-routing.module';

import { ImagenesIconosPage } from './imagenes-iconos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImagenesIconosPageRoutingModule
  ],
  declarations: [ImagenesIconosPage]
})
export class ImagenesIconosPageModule {}
