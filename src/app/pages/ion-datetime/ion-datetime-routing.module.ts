import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonDatetimePage } from './ion-datetime.page';

const routes: Routes = [
  {
    path: '',
    component: IonDatetimePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonDatetimePageRoutingModule {}
