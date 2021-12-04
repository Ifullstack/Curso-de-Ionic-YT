import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonSlidesPage } from './ion-slides.page';

const routes: Routes = [
  {
    path: '',
    component: IonSlidesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonSlidesPageRoutingModule {}
