import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonToolbarPage } from './ion-toolbar.page';

const routes: Routes = [
  {
    path: '',
    component: IonToolbarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonToolbarPageRoutingModule {}
