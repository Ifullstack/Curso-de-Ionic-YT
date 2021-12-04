import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-range',
  templateUrl: './range.page.html',
  styleUrls: ['./range.page.scss'],
})
export class RangePage implements OnInit {

  precio_pizza:number = 0;

  constructor() { }

  ngOnInit() {
  }

  recibirPrecioPizza( ev ) {
    var value = ev.detail.value;

    console.log( 'Primero - lower', value.lower );
    console.log( 'Segundo - upper', value.upper );
    
  }

}
