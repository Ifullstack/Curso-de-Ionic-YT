import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonPickerPage } from './ion-picker.page';

const routes: Routes = [
  {
    path: '',
    component: IonPickerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonPickerPageRoutingModule {}
