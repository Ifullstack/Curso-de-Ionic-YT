import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fab-button',
  templateUrl: './fab-button.page.html',
  styleUrls: ['./fab-button.page.scss'],
})
export class FabButtonPage implements OnInit {

  veces_clickado:number = 0;

  constructor() { }

  ngOnInit() {
  }

  heClickado() {
    this.veces_clickado = this.veces_clickado + 1;
    console.log('He clickado el FAB');
  }

}
