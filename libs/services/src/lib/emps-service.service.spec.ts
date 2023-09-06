import { TestBed } from '@angular/core/testing';

import { EmpsServiceService } from './emps-service.service';

describe('EmpsServiceService', () => {
  let service: EmpsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
