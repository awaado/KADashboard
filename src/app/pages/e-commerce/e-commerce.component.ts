import { Component ,ViewChild,ElementRef} from '@angular/core';
import { DomSanitizer, SafeResourceUrl ,  SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'ngx-ecommerce',
  templateUrl: './e-commerce.component.html',
})
export class ECommerceComponent {
  


   // url for iframe
 private MapView:SafeUrl;
 private TelemetryView:SafeResourceUrl;

 // toggle iframe 
 private download:boolean = false;


  constructor(
              private sanitizer: DomSanitizer) {
    
    this.MapView = this.sanitizer.bypassSecurityTrustResourceUrl("https://demo.thingsboard.io/dashboards/1f9828d0-058e-11e7-87f7-bb0136cc33d0?publicId=963ab470-34c9-11e7-a7ce-bb0136cc33d0&source=realtimeIotDashboards")   
    this.TelemetryView = this.sanitizer.bypassSecurityTrustResourceUrl("https://demo.thingsboard.io/dashboards/1f9828d0-058e-11e7-87f7-bb0136cc33d0?publicId=963ab470-34c9-11e7-a7ce-bb0136cc33d0&source=realtimeIotDashboards")
   
  }
}
