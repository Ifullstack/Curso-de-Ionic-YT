import { Component, OnInit, ViewChild  } from '@angular/core';
import { IonReorderGroup } from '@ionic/angular';
import { ItemReorderEventDetail } from '@ionic/core';

@Component({
  selector: 'app-reorder',
  templateUrl: './reorder.page.html',
  styleUrls: ['./reorder.page.scss'],
})
export class ReorderPage implements OnInit {
  @ViewChild(IonReorderGroup, { static:true }) reorderGroup: IonReorderGroup;

  items = [ 1, 2, 3, 4, 5, 6, 7 ];

  orderBool = true;

  constructor() { }

  ngOnInit() {
  }

  doReorder(ev: CustomEvent<ItemReorderEventDetail>) {
    console.log('Antes',this.items);
    this.items = ev.detail.complete(this.items);
    console.log('Despues',this.items);
  }

  order() {
    this.orderBool = !this.orderBool;
  }

}
