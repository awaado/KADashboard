import { Component, OnDestroy } from "@angular/core";
import { NbThemeService } from "@nebular/theme";
import { SolarData } from "../../@core/data/solar";
import { DataService } from "../../Services/data.service";

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
  templateUrl: "./dashboard.component.html"
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
      "https://demo.thingsboard.io/dashboard/3a1026e0-83f6-11e7-b56d-c7f326cba909?publicId=322a2330-7c36-11e7-835d-c7f326cba909"
    );
  }

  hideElement = true;
  onclick(s) {
    this.hideElement = !this.hideElement;

    this.DataService.notify();
    if (this.LowerDashboardHieght == "200") {
      this.TelemetryView = this.sanitizer.bypassSecurityTrustResourceUrl(
        "https://demo.thingsboard.io/dashboard/3d0bf910-ee09-11e6-b619-bb0136cc33d0?publicId=963ab470-34c9-11e7-a7ce-bb0136cc33d0"
      );
      console.log("ok");

      this.LowerDashboardHieght = "850";
    } else {
      this.TelemetryView = this.sanitizer.bypassSecurityTrustResourceUrl(
        "https://demo.thingsboard.io/dashboard/3a1026e0-83f6-11e7-b56d-c7f326cba909?publicId=322a2330-7c36-11e7-835d-c7f326cba909"
      );

      this.LowerDashboardHieght = "200";
    }
  }
  ngOnDestroy() {}
}
