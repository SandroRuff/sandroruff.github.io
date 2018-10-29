import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { NavListService } from '../nav-list.service';
import { PageSliderService } from '../page-slider.service';

@Component({
  selector: 'app-panel-top-list',
  templateUrl: './panel-top-list.component.html',
  styleUrls: ['./panel-top-list.component.css']
})
export class PanelTopListComponent implements OnInit {
  @Output() clickOnList = new EventEmitter<any>();

  items: object[];
  selectedIndex: number;

  constructor(private navListService: NavListService,
    private pageSliderService: PageSliderService) { }

  ngOnInit() {
    this.items = this.navListService.navItems;
  }

  ngDoCheck() {
    for (let i = 0; i < this.pageSliderService.currentStyles.length; i++) {
      this.items[i]['isSelected'] = this.pageSliderService.currentStyles[i]['isCurrent'];
    }
  }

  onListClick(title) {
    this.selectedIndex = this.navListService.getIndex(title);
    this.clickOnList.emit(this.selectedIndex);
  }
}
