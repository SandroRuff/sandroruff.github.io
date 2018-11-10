import { Component, Input, Output, EventEmitter, OnInit, DoCheck } from '@angular/core';
import { NavListService } from '../nav-list.service';
import { PageSliderService } from '../page-slider.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, DoCheck {
  @Input() isVisible: boolean;
  @Output() hide = new EventEmitter<any>();
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

  hideSidebar() {
    this.isVisible = false;
    this.hide.emit(null);
  }

  onSidebarListClick(title) {
    this.hideSidebar();
    this.selectedIndex = this.navListService.getIndex(title);
    this.clickOnList.emit(this.selectedIndex);
  }
}
