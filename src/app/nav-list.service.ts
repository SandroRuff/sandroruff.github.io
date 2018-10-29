import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavListService {
  currentIndex: number = 0;
  navItems: object[] = [
    { 'title': 'Home' },
    { 'title': 'About' },
    { 'title': 'Projects' },
    { 'title': 'Contact' }
  ];

  getIndex(title) {
    for (let index = 0; index < this.navItems.length; index++) {
      if (this.navItems[index]['title'] === title) {
        return index;
      }
    }
  }
}
