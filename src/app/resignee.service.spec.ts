import { TestBed } from '@angular/core/testing';

import { ResigneeService } from './resignee.service';

describe('ResigneeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResigneeService = TestBed.get(ResigneeService);
    expect(service).toBeTruthy();
  });
});
