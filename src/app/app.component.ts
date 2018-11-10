import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';
import { PageSliderService } from './page-slider.service';
import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  currentStyles: object[];
  isSidebarVisible = false;

  wheelEvent = fromEvent(document, 'wheel').pipe(map(event => {
    this.pageSliderService.handleWheelEvent(event);
  }));
  subscribe = this.wheelEvent.subscribe();

  constructor(private pageSliderService: PageSliderService) { }

  ngOnInit() {
    this.currentStyles = this.pageSliderService.currentStyles;
  }
  ngOnDestroy() {
    this.subscribe.unsubscribe();
  }

  onListClick(item: number) {
    this.pageSliderService.moveSlide(item);
  }

  onLogoClick() {
    this.pageSliderService.moveToFirstSlide();
  }

  onNavBtnClick() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }

  // KeyEvent Listener
  @HostListener('document:keydown', ['$event.key'])
  handleKeyboardEvent(key) {
    this.pageSliderService.handleKeyboardEvent(key);
  }
}
