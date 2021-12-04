import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.page.html',
  styleUrls: ['./inputs.page.scss'],
})
export class InputsPage implements OnInit {

  nombre:string = '';
  biografia:string = '';

  constructor() { }

  ngOnInit() {
  }

  obtenerValorInput( ev:CustomEvent ) {
    console.log( ev.detail.value );
  }

}
