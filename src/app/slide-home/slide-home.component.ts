import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-slide-home',
  templateUrl: './slide-home.component.html',
  styleUrls: ['./slide-home.component.css']
})
export class SlideHomeComponent {

  @Input() stateClasses: object;

  name: string = 'Sandro Ruff';
  position: string = 'Frontend Developer';

}
