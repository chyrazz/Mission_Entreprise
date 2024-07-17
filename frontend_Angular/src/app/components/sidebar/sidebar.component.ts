import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/users', title: 'Account management',  icon:'manage_accounts', class: '' },
    { path: '/lead', title: 'lead',  icon:'contact_phone', class: '' },
    { path: '/client', title: 'client',  icon:'groups', class: '' },
    { path: '/activity', title: 'activities',  icon:'attach_file', class: '' },
    { path: '/opportunities', title: 'opportunities',  icon:'grading', class: '' },
    { path: '/user-opportunities', title: 'user opportunities',  icon:'grading', class: '' },
    { path: '/contract', title: 'contracts',  icon:'content_paste', class: '' },
    { path: '/request', title: 'requests',  icon:'support_agent', class: '' },
  

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
