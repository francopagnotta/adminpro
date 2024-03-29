import { Injectable } from '@angular/core';
import { Menu } from '../shared/interfaces/menu';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  menu: Menu[] = [
    {
      title: 'Dashboard',
      icon: 'mdi mdi-gauge', 
      subMenu: [
        {
          title: 'Main',
          url: '/dashboard'
        },
        {
          title: 'Progressbar',
          url: '/progress'
        },
        {
          title: 'Graphics',
          url: '/graphic1'
        },
        {
          title: 'Promises',
          url: '/promises'
        },
        {
          title: 'Rxjs',
          url: '/rxjs'
        },
      ]
    }
  ];

  constructor() { }
}
