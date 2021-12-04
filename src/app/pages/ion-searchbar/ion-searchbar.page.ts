import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ion-searchbar',
  templateUrl: './ion-searchbar.page.html',
  styleUrls: ['./ion-searchbar.page.scss'],
})
export class IonSearchbarPage implements OnInit {

  // Inicializar con un valor
  value:string = "";

  constructor() { }

  ngOnInit() {
  }

  getSearchBarChanges(event: CustomEvent) {
    this.value = event.detail.value;
    // Capturas el valor del searchbar y haces con él lo que quieras
    console.log(this.value);
  }

}
