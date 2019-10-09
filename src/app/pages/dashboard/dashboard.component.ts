import {Component, OnInit  } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators' ;
import { SolarData } from '../../@core/data/solar';
import { DomSanitizer, SafeResourceUrl ,  SafeUrl} from '@angular/platform-browser';

import{trigger,state,style,transition,animate} from '@angular/animations'


interface CardSettings {
  title: string;
  iconClass: string;
  type: string;
}

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
  animations: [
    trigger('slideInOut2', [
      state('in', style({
      
        height: '650px',
       
      })),
      state('out', style({
       
        height: '0px',
       
      })),
      transition('in => out', animate('200ms ease-in-out')),
      transition('out => in', animate('200ms ease-in-out'))
    ]),
    trigger('slideInOut', [
      state('in', style({
       
        height: '200px',
       
      })),
      state('out', style({
        opacity: '100',
        
        height: '850px',
       
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ])
  ]
})
export class DashboardComponent implements OnInit  {

 // url for iframe
 private MapView:SafeUrl;
 private TelemetryView:SafeResourceUrl;

 // toggle iframe 
 private toogle:boolean = true;
 helpMenuOpen: string;
 helpMenuOpen2: string;

  constructor(private themeService: NbThemeService,
              private solarService: SolarData,
              private sanitizer: DomSanitizer) {
    
    this.MapView = this.sanitizer.bypassSecurityTrustResourceUrl("https://demo.thingsboard.io/dashboards/1f9828d0-058e-11e7-87f7-bb0136cc33d0?publicId=963ab470-34c9-11e7-a7ce-bb0136cc33d0&source=realtimeIotDashboards")   
    this.TelemetryView = this.sanitizer.bypassSecurityTrustResourceUrl("https://demo.thingsboard.io/dashboard/3a1026e0-83f6-11e7-b56d-c7f326cba909?publicId=322a2330-7c36-11e7-835d-c7f326cba909")
   
  }
  
 collapse(ev){
  this.helpMenuOpen = this.helpMenuOpen === 'out' ? 'in' : 'out';
  this.helpMenuOpen2 = this.helpMenuOpen2 === 'out' ? 'in' : 'out';


 }
 ngOnInit() {
  this.helpMenuOpen = 'out';
  this.helpMenuOpen2 = 'out';

}
 
}
