import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkboxs',
  templateUrl: './checkboxs.page.html',
  styleUrls: ['./checkboxs.page.scss'],
})
export class CheckboxsPage implements OnInit {

 
  developer_checkbox:boolean = false;
  deshabilitado:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  recibirCheckbox( event:CustomEvent ) {
    console.log(event.detail.checked);
    var checked = event.detail.checked;
    if( checked ) {
      console.log('Esta en check')
    } else {
      
    }
  }

}
