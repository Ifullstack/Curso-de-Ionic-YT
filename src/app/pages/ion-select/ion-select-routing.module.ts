import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonSelectPage } from './ion-select.page';

const routes: Routes = [
  {
    path: '',
    component: IonSelectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonSelectPageRoutingModule {}
