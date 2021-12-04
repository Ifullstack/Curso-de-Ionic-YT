import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RadioButtonPageRoutingModule } from './radio-button-routing.module';

import { RadioButtonPage } from './radio-button.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RadioButtonPageRoutingModule
  ],
  declarations: [RadioButtonPage]
})
export class RadioButtonPageModule {}
