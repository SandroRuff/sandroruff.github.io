import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideProjectsComponent } from './slide-projects.component';

describe('SlideProjectsComponent', () => {
  let component: SlideProjectsComponent;
  let fixture: ComponentFixture<SlideProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
