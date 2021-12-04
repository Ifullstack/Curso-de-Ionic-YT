import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListasItemsPage } from './listas-items.page';

const routes: Routes = [
  {
    path: '',
    component: ListasItemsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListasItemsPageRoutingModule {}
