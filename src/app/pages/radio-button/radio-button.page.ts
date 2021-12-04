import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.page.html',
  styleUrls: ['./radio-button.page.scss'],
})
export class RadioButtonPage implements OnInit {

  option_selected:string = 'jamon';

  constructor() { }

  ngOnInit() {
  }

  selectPizza( ev:CustomEvent ) {
    //console.log(ev);
    this.option_selected = ev.detail.value;
    console.log( this.option_selected );
    
  }

}
