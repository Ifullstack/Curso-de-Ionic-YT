import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';


@Component({
  selector: 'app-ion-chip',
  templateUrl: './ion-chip.page.html',
  styleUrls: ['./ion-chip.page.scss'],
})
export class IonChipPage implements OnInit {

  @ViewChild(IonContent, { static:false } ) content:IonContent;

  fakeArray = [ 1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1 ];
 
  constructor() { 
    
  }

  ngOnInit() {
  }

  scrollDown() {
     this.content.scrollToBottom();
  }

}
