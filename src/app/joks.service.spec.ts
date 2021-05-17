import { TestBed } from '@angular/core/testing';

import { JoksService } from './joks.service';

describe('JoksService', () => {
  let service: JoksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JoksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
