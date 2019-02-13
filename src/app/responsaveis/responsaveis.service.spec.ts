import { TestBed } from '@angular/core/testing';

import { ResponsaveisService } from './responsaveis.service';

describe('ResponsaveisService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResponsaveisService = TestBed.get(ResponsaveisService);
    expect(service).toBeTruthy();
  });
});
