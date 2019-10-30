import { TestBed } from '@angular/core/testing';

import { VllazniaService } from './vllaznia.service';

describe('VllazniaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VllazniaService = TestBed.get(VllazniaService);
    expect(service).toBeTruthy();
  });
});
