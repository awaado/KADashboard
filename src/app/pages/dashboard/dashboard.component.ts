import { Component, OnDestroy } from "@angular/core";
import { NbThemeService } from "@nebular/theme";
import { SolarData } from "../../@core/data/solar";
import { DataService } from "../../Services/data.service";
import {  trigger,  state,  style,  animate,  transition} from "@angular/animations";

import {
  DomSanitizer,
  SafeResourceUrl,
  SafeUrl
} from "@angular/platform-browser";

interface CardSettings {
  title: string;
  iconClass: string;
  type: string;
}

@Component({
  selector: "ngx-dashboard",
  styleUrls: ["./dashboard.component.scss"],
  templateUrl: "./dashboard.component.html",
  animations: [
    trigger("slideInOut", [
      state(
        "in",
        style({
          overflow: "hidden",
          height: "650px",
          // width: "300px"
        })
      ),
      state(
        "out",
        style({
          opacity: "0",
          overflow: "hidden",
          height: "0px",
          // width: "0px"
        })
      ),
      transition("in => out", animate("400ms ease-in-out")),
      transition("out => in", animate("400ms ease-in-out"))
    ]),
    trigger("slider", [
      state(
        "in",
        style({
          overflow: "hidden",
          height: "650",
          // width: "300px"
        })
      ),
      state(
        "out",
        style({
          opacity: "0",
          overflow: "hidden",
          height: "0px",
          // width: "0px"
        })
      ),
      transition("in => out", animate("400ms ease-in-out")),
      transition("out => in", animate("400ms ease-in-out"))
    ])
  ]
})
export class DashboardComponent implements OnDestroy {
  tusCards: string;

  // url for iframe
  private MapView: SafeUrl;
  private TelemetryView: SafeResourceUrl;

  // toggle iframe
  private download: boolean = false;
  LowerDashboardHieght: any;
  UpperDashboardHieght: any;
  constructor(
    private themeService: NbThemeService,
    private DataService: DataService,
    private solarService: SolarData,
    private sanitizer: DomSanitizer
  ) {
    this.LowerDashboardHieght = "200";
    this.UpperDashboardHieght = "650";
    this.MapView = this.sanitizer.bypassSecurityTrustResourceUrl(
      "https://demo.thingsboard.io/dashboards/1f9828d0-058e-11e7-87f7-bb0136cc33d0?publicId=963ab470-34c9-11e7-a7ce-bb0136cc33d0&source=realtimeIotDashboards"
    );
    this.TelemetryView = this.sanitizer.bypassSecurityTrustResourceUrl(
      "https://demo.thingsboard.io/dashboards/1f9828d0-058e-11e7-87f7-bb0136cc33d0?publicId=963ab470-34c9-11e7-a7ce-bb0136cc33d0&source=realtimeIotDashboards"
    );
  }
  helpMenuOpen: string;
  hideElement = true;
  onclick(s) {
    this.helpMenuOpen = this.helpMenuOpen === 'out' ? 'in' : 'out';
    // this.hideElement = !this.hideElement;
    var i;
    this.DataService.notify();
    if (this.LowerDashboardHieght == 200) {
      this.TelemetryView = this.sanitizer.bypassSecurityTrustResourceUrl(
        "https://demo.thingsboard.io/dashboards/1f9828d0-058e-11e7-87f7-bb0136cc33d0?publicId=963ab470-34c9-11e7-a7ce-bb0136cc33d0&source=realtimeIotDashboards"
      );
      console.log("ok");

      this.LowerDashboardHieght = 850;

    } else {
      this.TelemetryView = this.sanitizer.bypassSecurityTrustResourceUrl(
        "https://demo.thingsboard.io/dashboards/1f9828d0-058e-11e7-87f7-bb0136cc33d0?publicId=963ab470-34c9-11e7-a7ce-bb0136cc33d0&source=realtimeIotDashboards"
      );

      this.LowerDashboardHieght = 200;
    
      // for(i=0;i<650;i++){
      //   setInterval(() => {
      //    this
      //     }, 1);
      // }
    }
  }
  ngOnDestroy() {}
}
