import { Component, OnInit } from '@angular/core';
import { ComponentsIonicService } from '../../services/components-ionic.service';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {

  constructor( 
    public componentsIonic:ComponentsIonicService, 
     public  activatedRouted:ActivatedRoute
    ) { }

  ngOnInit() {
    var data = null;
    // Query Params
    this.activatedRouted.queryParams.subscribe( parametro => {
          if ( parametro.uid ) {
              data = JSON.parse( parametro.uid );
              console.log(data);
              
          }
    });

    var uid = null;
    uid = this.activatedRouted.snapshot.paramMap.get('uid');
    console.log(uid);
    


  }

  presentarAlerta() {

    this.componentsIonic.presentarActionSheet()
  }

}
