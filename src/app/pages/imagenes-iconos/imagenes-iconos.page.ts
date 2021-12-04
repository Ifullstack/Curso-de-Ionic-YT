import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imagenes-iconos',
  templateUrl: './imagenes-iconos.page.html',
  styleUrls: ['./imagenes-iconos.page.scss'],
})
export class ImagenesIconosPage implements OnInit {

  img:string;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.img = 'https://images.unsplash.com/photo-1596107035758-b35ebdb15c9c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60';
    }, 8000);


    
  }

}
