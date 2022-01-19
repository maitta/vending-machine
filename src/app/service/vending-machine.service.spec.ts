import { TestBed } from '@angular/core/testing'

import { VendingMachineService } from './vending-machine.service'
import { VendingMachineSize as MachineSize } from './vending-machine.service'
import * as Coins from "../models/coin"
import { Initial } from '../models/snack'

describe('VendingMachineService', () => {
  let service: VendingMachineService
  let size = MachineSize.medium
  let random = Math.floor(Math.random() * 11)

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{provide: 'size', useValue: size}]
    });
    service = TestBed.inject(VendingMachineService)
  });

  it('should be created', () => {
    expect(service).toBeTruthy()
  });

  it('should provide the right amount of snacks', () => {
    expect(service.snacks.length).toBe(size)
  })

  it('should accept coins', () => {
    expect(service.acceptedCoins.length).toBeGreaterThan(0);
    expect(service.acceptedCoins.every(x => x instanceof Coins.Coin)).toBeTruthy
  })

  it('should allow snack selection', () => {
    let sel = service.getSelected()
    expect(sel).toBeInstanceOf(Initial)
    const snack = service.snacks[random]
    service.select(snack)
    sel = service.getSelected()
    expect(sel).toBe(snack)
  })

  it('should increase credit when inserting coins', () => {

  })
})
