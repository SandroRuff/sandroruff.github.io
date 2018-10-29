import { TestBed } from '@angular/core/testing';

import { PageSliderService } from './page-slider.service';

describe('PageSliderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PageSliderService = TestBed.get(PageSliderService);
    expect(service).toBeTruthy();
  });
});
