import { TestBed } from '@angular/core/testing';

import { NodeSrvieceService } from './node-srviece.service';

describe('NodeSrvieceService', () => {
  let service: NodeSrvieceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NodeSrvieceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
