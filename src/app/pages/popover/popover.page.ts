import { Component, OnInit } from '@angular/core';

import { PopoverController } from '@ionic/angular';

//Componente
import { ListasItemsPage } from '../listas-items/listas-items.page';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor( public popoverController: PopoverController ) { }

  ngOnInit() {
  }

  async abrirPopover( ev: any ) {
      const popover = await this.popoverController.create({
        component: ListasItemsPage,
        cssClass: 'my-popover-class',
        event: ev,
        translucent: true
      });
      return await popover.present();
  }

}
