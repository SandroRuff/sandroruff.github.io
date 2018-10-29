import { Component, OnInit, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-slide-projects',
  templateUrl: './slide-projects.component.html',
  styleUrls: ['./slide-projects.component.css']
})
export class SlideProjectsComponent implements OnInit {

  innerWidth: number;

  @Input() stateClasses: object;
  ngOnInit() {
    this.innerWidth = window.innerWidth;
  }

  projects: object[] = [
    {
      'name': 'Footbal Stats',
      'description': 'World Football is the #1 reliable source for football stats from around the world. From Aghanistan to Zimbabwe, we cover football results, fixtures and stats in +135 countries.',
      'tools': 'Angular, HTML5, CSS3, TS, JS, Animation',
      'link': 'https://github.com/SandroRuff/foot-stats'
    },
    {
      'name': 'Lambda Restaurant',
      'description': 'A restaurant website, which contains menu, possibility of reservation, reviews and much more.',
      'tools': 'HTML5, CSS3, JS, Animation',
      'link': 'https://github.com/SandroRuff/lambda-restaurant'
    }
  ]

  projectIndex: number = 0;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }

  isLargeTabletWidth(): boolean {
    return this.innerWidth >= 768;
  }

  updateIndex(index) {
    if (index != this.projectIndex) {
      this.projectIndex = index;
    }
  }

  isSelected(index): boolean {
    return index === this.projectIndex;
  }
}
