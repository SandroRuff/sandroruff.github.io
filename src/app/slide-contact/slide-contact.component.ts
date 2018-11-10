import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-slide-contact',
  templateUrl: './slide-contact.component.html',
  styleUrls: ['./slide-contact.component.css']
})
export class SlideContactComponent {

  @Input() stateClasses: object;

  email = 'yorsh.alexander@gmail.com';
  links: object[] = [
    {
      'name': 'Github',
      'link': 'https://github.com/SandroRuff'
    },
    {
      'name': 'Twitter',
      'link': 'https://twitter.com/RuffSandro'
    },
    {
      'name': 'LinkedIn',
      'link': 'https://www.linkedin.com/in/alexander-yorsh'
    }
  ];
}
