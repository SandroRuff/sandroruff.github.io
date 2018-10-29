import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelTopListComponent } from './panel-top-list.component';

describe('PanelTopListComponent', () => {
  let component: PanelTopListComponent;
  let fixture: ComponentFixture<PanelTopListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelTopListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelTopListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
