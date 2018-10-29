import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-panel-top',
  templateUrl: './panel-top.component.html',
  styleUrls: ['./panel-top.component.css']
})
export class PanelTopComponent {

  @Output() clickOnList = new EventEmitter<any>();
  @Output() clickOnLogo = new EventEmitter<any>();
  @Output() clickOnNavBtn = new EventEmitter<any>();

  @Input() isSlideCurrent: boolean;

  onLogoClick() {
    this.clickOnLogo.emit(null);
  }

  onListClick(item: number) {
    this.clickOnList.emit(item);
  }

  onNavBtnClick() {
    this.clickOnNavBtn.emit(null);
  }
}