import { TestBed } from '@angular/core/testing'

import { VendingMachineService } from './vending-machine.service'
import { VendingMachineSize as MachineSize } from './vending-machine.service'
import * as Coins from "../models/coin"
import { CocaCola, Initial, Peanuts } from '../models/snack'


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

  const selectRandomSnack = function() {
    const snack = service.snacks[random]
    service.select(snack)
    const selection = service.getSelected()
    return { snack, selection }
  }

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
    let previousSel = service.getSelected()
    expect(previousSel).toBeInstanceOf(Initial)
    const {snack, selection} = selectRandomSnack()
    expect(selection).toBe(snack)
  })

  it('should increase credit when inserting coins', () => {
    expect(service.credit).toBe(0.00)
    service.insertCoin(new Coins.Dollar)
    expect(service.credit).toBe(1.00)
    service.insertCoin(new Coins.Quarter)
    expect(service.credit).toBe(1.25)
    service.insertCoin(new Coins.Half)
    expect(service.credit).toBe(1.75)
  })

  it('should be able to pay if credit is enough for selection', () => {
    service.insertCoin(new Coins.Dollar)
    service.insertCoin(new Coins.Half)
    expect(service.credit).toBe(1.50)
    const {snack} = selectRandomSnack()
    const res = service.canPay()
    if(snack.price > 1.50){
      expect(res).toBe(false)
    }else{
      expect(res).toBe(true)
    }
  })

  it('should check if snack has enough stock', () => {
    const {snack} = selectRandomSnack()
    expect(service.hasStock()).toBe(true)
    snack.stock = 0
    expect(service.hasStock()).toBe(false)
  })

  it('should check for a valid selection', () => {
    expect(service.hasValidSelection()).toBe(false)
    selectRandomSnack()
    expect(service.hasValidSelection()).toBe(true)
  })

  it('should show the no-credit message', () => {
    expect(service.credit).toEqual(0)
    selectRandomSnack()
    expect(service.isShowNoCreditMessage()).toBe(true)
  })

  it('should show the no-stock message', () => {
    const {snack} = selectRandomSnack()
    snack.stock = 0
    expect(service.isShowNoStockMessage()).toBe(true)
  })

  it('should handle payment correctly', () => {
    service.insertCoin(new Coins.Dollar)
    service.insertCoin(new Coins.Dollar)
    let {snack, selection} = selectRandomSnack()
    const previousStock = selection.stock
    const previousCredit = service.credit
    service.pay()
    if(snack.price > previousCredit){
      expect(selection.stock).toBe(previousStock)
      expect(service.credit).toBe(previousCredit)
      expect(service.getSelected()).toBe(selection)
    }else{
      expect(selection.stock).toBe(previousStock - 1)
      expect(service.credit).toBe(Number((previousCredit - snack.price).toFixed(2)))
      expect(service.getSelected()).toBeInstanceOf(Initial)
    }
  })
})
