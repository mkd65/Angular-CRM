import { TestBed } from '@angular/core/testing';

import { ClientListResolverService } from './client-list-resolver.service';

describe('ClientListResolverService', () => {
  let service: ClientListResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientListResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
