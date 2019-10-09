import {Component, OnInit} from '@angular/core';
import {NbLayoutDirection, NbLayoutDirectionService} from "@nebular/theme";

@Component({
  selector: 'ngx-two-columns-layout',
  styleUrls: ['./two-columns.layout.scss'],
  template: `
    <nb-layout windowMode>
      <nb-layout-header fixed>
        <ngx-header></ngx-header>
      </nb-layout-header>

      <nb-sidebar [ngClass]="sidebar_class" tag="menu-sidebar" responsive>
        <ng-content select="nb-menu"></ng-content>
      </nb-sidebar>

      <nb-layout-column  style="padding: 1px 1px 1px 5px">
        <ng-content select="router-outlet"></ng-content>
      </nb-layout-column>

      <nb-layout-footer fixed>
        <ngx-footer></ngx-footer>
      </nb-layout-footer>
    </nb-layout>
  `,
})
export class TwoColumnsLayoutComponent implements OnInit {
  constructor(private  directionService: NbLayoutDirectionService) {
  }

  ngOnInit(): void {
    if ( this.layout_direction === NbLayoutDirection.RTL) {
      this.sidebar_class = 'menu-sidebar-rtl';
    }
  }

  layout_direction: NbLayoutDirection = this.directionService.getDirection();
  sidebar_class: string = 'menu-sidebar';
}