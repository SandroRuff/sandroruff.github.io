import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoCombinedComponent } from './logo-combined.component';

describe('LogoCombinedComponent', () => {
  let component: LogoCombinedComponent;
  let fixture: ComponentFixture<LogoCombinedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoCombinedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoCombinedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
