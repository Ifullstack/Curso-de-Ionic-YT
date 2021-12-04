import { Component, OnInit } from '@angular/core';
import { ComponentsIonicService } from '../../services/components-ionic.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor( public componentsIonic:ComponentsIonicService) { }

  ngOnInit() {
  }

  presentarAlerta() {
    this.componentsIonic.presentAlertaConfirmar();
  }

  presentarAlertaPrompt() {
    this.componentsIonic.presentAlertPrompt();
  }

}
