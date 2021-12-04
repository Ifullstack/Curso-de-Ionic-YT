import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ion-segment',
  templateUrl: './ion-segment.page.html',
  styleUrls: ['./ion-segment.page.scss'],
})
export class IonSegmentPage implements OnInit {

  optionSelected:string = "1";

  constructor() { }

  ngOnInit() {
  }

  segmentChanged(event: CustomEvent) {
      this.optionSelected = event.detail.value;
      console.log(event.detail.value);    
  }

}
