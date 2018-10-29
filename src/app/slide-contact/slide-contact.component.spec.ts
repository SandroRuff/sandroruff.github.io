import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideContactComponent } from './slide-contact.component';

describe('SlideContactComponent', () => {
  let component: SlideContactComponent;
  let fixture: ComponentFixture<SlideContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
