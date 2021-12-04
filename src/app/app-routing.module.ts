import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { 
    path: '', 
    redirectTo: 'home', 
    pathMatch: 'full' 
  },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'action-sheet/:uid/:nombre',
    loadChildren: () => import('./pages/action-sheet/action-sheet.module').then( m => m.ActionSheetPageModule)
    
  },
  {
    path: 'alert',
    loadChildren: () => import('./pages/alert/alert.module').then( m => m.AlertPageModule)
  },
  {
    path: 'badge',
    loadChildren: () => import('./pages/badge/badge.module').then( m => m.BadgePageModule)
  },
  {
    path: 'buttons',
    loadChildren: () => import('./pages/buttons/buttons.module').then( m => m.ButtonsPageModule)
  },
  {
    path: 'cards',
    loadChildren: () => import('./pages/cards/cards.module').then( m => m.CardsPageModule)
  },
  {
    path: 'checkboxs',
    loadChildren: () => import('./pages/checkboxs/checkboxs.module').then( m => m.CheckboxsPageModule)
  },
  {
    path: 'ion-chip',
    loadChildren: () => import('./pages/ion-chip/ion-chip.module').then( m => m.IonChipPageModule)
  },
  {
    path: 'ion-datetime',
    loadChildren: () => import('./pages/ion-datetime/ion-datetime.module').then( m => m.IonDatetimePageModule)
  },
  {
    path: 'ion-picker',
    loadChildren: () => import('./pages/ion-picker/ion-picker.module').then( m => m.IonPickerPageModule)
  },
  {
    path: 'fab-button',
    loadChildren: () => import('./pages/fab-button/fab-button.module').then( m => m.FabButtonPageModule)
  },
  {
    path: 'grid',
    loadChildren: () => import('./pages/grid/grid.module').then( m => m.GridPageModule)
  },
  {
    path: 'infinite-scroll',
    loadChildren: () => import('./pages/infinite-scroll/infinite-scroll.module').then( m => m.InfiniteScrollPageModule)
  },
  {
    path: 'inputs',
    loadChildren: () => import('./pages/inputs/inputs.module').then( m => m.InputsPageModule)
  },
  {
    path: 'listas-items',
    loadChildren: () => import('./pages/listas-items/listas-items.module').then( m => m.ListasItemsPageModule)
  },
  {
    path: 'ion-virtual-scroll',
    loadChildren: () => import('./pages/ion-virtual-scroll/ion-virtual-scroll.module').then( m => m.IonVirtualScrollPageModule)
  },
  {
    path: 'imagenes-iconos',
    loadChildren: () => import('./pages/imagenes-iconos/imagenes-iconos.module').then( m => m.ImagenesIconosPageModule)
  },
  {
    path: 'modal',
    loadChildren: () => import('./pages/modal/modal.module').then( m => m.ModalPageModule)
  },
  {
    path: 'my-modal',
    loadChildren: () => import('./pages/my-modal/my-modal.module').then( m => m.MyModalPageModule)
  },
  {
    path: 'popover',
    loadChildren: () => import('./pages/popover/popover.module').then( m => m.PopoverPageModule)
  },
  {
    path: 'radio-button',
    loadChildren: () => import('./pages/radio-button/radio-button.module').then( m => m.RadioButtonPageModule)
  },
  {
    path: 'range',
    loadChildren: () => import('./pages/range/range.module').then( m => m.RangePageModule)
  },
  {
    path: 'refresher',
    loadChildren: () => import('./pages/refresher/refresher.module').then( m => m.RefresherPageModule)
  },
  {
    path: 'reorder',
    loadChildren: () => import('./pages/reorder/reorder.module').then( m => m.ReorderPageModule)
  },
  {
    path: 'ion-searchbar',
    loadChildren: () => import('./pages/ion-searchbar/ion-searchbar.module').then( m => m.IonSearchbarPageModule)
  },
  {
    path: 'ion-segment',
    loadChildren: () => import('./pages/ion-segment/ion-segment.module').then( m => m.IonSegmentPageModule)
  },
  {
    path: 'ion-slides',
    loadChildren: () => import('./pages/ion-slides/ion-slides.module').then( m => m.IonSlidesPageModule)
  },
  {
    path: 'ion-toolbar',
    loadChildren: () => import('./pages/ion-toolbar/ion-toolbar.module').then( m => m.IonToolbarPageModule)
  },
  {
    path: 'ion-select',
    loadChildren: () => import('./pages/ion-select/ion-select.module').then( m => m.IonSelectPageModule)
  },
  {
    path: 'toogle',
    loadChildren: () => import('./pages/toogle/toogle.module').then( m => m.TooglePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
