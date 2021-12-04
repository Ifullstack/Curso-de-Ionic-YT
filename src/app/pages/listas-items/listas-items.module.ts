import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListasItemsPageRoutingModule } from './listas-items-routing.module';

//import { ListasItemsPage } from './listas-items.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListasItemsPageRoutingModule
  ],
  declarations: [
    //ListasItemsPage
  ]
})
export class ListasItemsPageModule {}
