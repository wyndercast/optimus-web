import { TestBed } from '@angular/core/testing';

import { CrmOptimusService } from './crm-optimus.service';

describe('CrmOptimusService', () => {
  let service: CrmOptimusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrmOptimusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
