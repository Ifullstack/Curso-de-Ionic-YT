import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listas-items',
  templateUrl: './listas-items.page.html',
  styleUrls: ['./listas-items.page.scss'],
})
export class ListasItemsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  hazAlgo() {
    console.log('Hice algo');   
  }

}
