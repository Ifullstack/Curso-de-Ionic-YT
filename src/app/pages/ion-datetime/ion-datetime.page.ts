import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ion-datetime',
  templateUrl: './ion-datetime.page.html',
  styleUrls: ['./ion-datetime.page.scss'],
})
export class IonDatetimePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  obtenerFecha( event:CustomEvent ) {
    console.log(event.detail.value);
  }

}
