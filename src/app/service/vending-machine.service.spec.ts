import { TestBed } from '@angular/core/testing';

import { VendingMachineService } from './vending-machine.service';
import { VendingMachineSize as size } from './vending-machine.service';

describe('VendingMachineService', () => {
  let service: VendingMachineService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{provide: 'size', useValue: size.medium}]
    });
    service = TestBed.inject(VendingMachineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
