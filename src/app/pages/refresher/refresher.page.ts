import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refresher',
  templateUrl: './refresher.page.html',
  styleUrls: ['./refresher.page.scss'],
})
export class RefresherPage implements OnInit {

  alarmas = [ '20:30 am', '10:00 am' ];


  constructor() { }

  ngOnInit() {
  }

  doStart(event) {
    console.log('Estoy en start');
    
  }

  doPull(event) {
    console.log('Estoy en pull');
  }

  doRefresher(event) {
    console.log('Estoy en refresher');
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      this.alarmas.push('15:00 pm');
      event.target.complete();
    }, 2000);
  }

}
