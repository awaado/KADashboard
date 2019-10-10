import {Component, OnInit ,ApplicationRef } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators' ;
import { SolarData } from '../../@core/data/solar';
import { DomSanitizer, SafeResourceUrl ,  SafeUrl} from '@angular/platform-browser';
import { ToggleService } from '../../Services/toggle.service';
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
      
        height: '550px',
       
      })),
      state('out', style({
       
        height: '0px',
       
      })),
      transition('in => out', animate('200ms ease-in-out')),
      transition('out => in', animate('200ms ease-in-out'))
    ]),
    trigger('slideInOut', [
      state('in', style({
       
        height: '150px',
       
      })),
      state('out', style({
        opacity: '100',
        
        height: '700px',
       
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ])
  ]
})
export class DashboardComponent implements OnInit  {

 // url for iframe
 private MapView:SafeUrl;
 private TelemetryView:SafeUrl;
  private sora:string;
 // toggle iframe 
 private toogle:boolean = true;
 helpMenuOpen: string;
 helpMenuOpen2: string;

  constructor(private themeService: NbThemeService,
              private solarService: SolarData,
              private sanitizer: DomSanitizer,
              private ToggleService :ToggleService) {
    
    this.MapView = this.sanitizer.bypassSecurityTrustResourceUrl("http://localhost:9090/home")   
    this.TelemetryView = this.sanitizer.bypassSecurityTrustResourceUrl("http://localhost:9090/home")
    this.ToggleService.frameWidth="1370px"
  }
  
 collapse(){
  
this.ToggleService.getState();
 }
 ngOnInit() {
  this.ToggleService.state = 'in';
  this.ToggleService.frameWidth="1370px"
  
}

 
}
