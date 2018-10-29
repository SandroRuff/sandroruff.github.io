import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-slide-about',
  templateUrl: './slide-about.component.html',
  styleUrls: ['./slide-about.component.css']
})
export class SlideAboutComponent {

  @Input() stateClasses: object;

  textAbout: string[] = [
    'Hi! My name is Sandro Ruff.',
    'I’m frontend developer from Minsk (Belarus).'
  ];
}
