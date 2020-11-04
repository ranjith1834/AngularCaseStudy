import { TestBed } from '@angular/core/testing';

import { EmployeeListApiService } from './employee-list.service';

describe('EmployeeListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployeeListApiService = TestBed.get(EmployeeListApiService);
    expect(service).toBeTruthy();
  });
});
