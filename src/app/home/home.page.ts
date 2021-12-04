import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor( public router:Router, private menu: MenuController ) {}

  goToPage( page ) {
    this.router.navigate([ page ]);
  }

  goToActionSheet() {

    // this.router.navigate(['/action-sheet']);

    var uidPerfil = {
      uid:'123456'
    };

    var navExtras:NavigationExtras = {
        queryParams: {
          uid:JSON.stringify(uidPerfil)
        },
        queryParamsHandling:'merge'
    }

    this.router.navigate(['/action-sheet'], navExtras );
  }

  goToActionSheetConID() {
      var uid = '61616161661';
      this.router.navigate( [ '/action-sheet', uid, 'juan' ] )
  } 
  
  openMenu() {
    this.menu.toggle();
  }

}
