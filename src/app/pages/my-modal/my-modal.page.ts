import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-my-modal',
  templateUrl: './my-modal.page.html',
  styleUrls: ['./my-modal.page.scss'],
})
export class MyModalPage implements OnInit {

  @Input() nombre: string;
  @Input() apellidos: string;
  
  constructor( public modalController: ModalController ) { }

  ngOnInit() {
    console.log(this.nombre);
    console.log(this.apellidos);
    
  }

  closeModal() {
    this.modalController.dismiss();
  }

}
