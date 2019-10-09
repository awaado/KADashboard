import { Component } from '@angular/core';

import { MENU_ITEMS } from './pages-menu';
import { MENU_ITEMS_RIGHT } from './pages-menu-right';


@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
  <ngx-one-column-layout>
    <nb-menu [items]="menu"></nb-menu>
      
      
      <router-outlet></router-outlet>
    
  
  </ngx-one-column-layout>
    <ngx-two-columns-layout>
    <nb-menu   [ngClass]="ss" [items]="menur"></nb-menu>

      
    </ngx-two-columns-layout>

    

  
  `,
})
export class PagesComponent {
  ss="menu-sidebar"
 
  menu = MENU_ITEMS;
  menur = MENU_ITEMS_RIGHT;

}
