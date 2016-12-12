import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppState } from '../app.service'; 

import template from './app.component.html';
 
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  template
})
export class AppComponent implements OnInit {
  constructor( public appState: AppState ){

    }
    
  ngOnInit(){
        console.log('Initial App State');
    } 
}