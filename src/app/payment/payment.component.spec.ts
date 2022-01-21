import { ComponentFixture, TestBed } from '@angular/core/testing'

import { PaymentComponent } from './payment.component'
import { VendingMachineService, VendingMachineSize as size } from '../service/vending-machine.service'
import * as Coins from "../models/coin"

describe('PaymentComponent', () => {
  let component: PaymentComponent
  let fixture: ComponentFixture<PaymentComponent>
  let vendingserviceSpy: jasmine.SpyObj<VendingMachineService>
  const NOCREDITMESSAGE = "Not enough credit"
  const NOSTOCKMESSAGE = "Selection is out of stock"

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('VendingMachineService', 
                  ['canPay', 'isShowNoCreditMessage', 'insertCoin', 'isShowNoStockMessage', 'hasStock', 'pay'], 
                  {
                    'acceptedCoins': [new Coins.Dollar(), new Coins.Half(), new Coins.Quarter(), new Coins.Dime()],
                    'credit': 2.75
                  }
                ) 
    await TestBed.configureTestingModule({
      declarations: [ PaymentComponent ],
      providers: [{provide: 'size', useValue: size.medium}, {provide: VendingMachineService, useValue: spy}]
    })
    .compileComponents()
    vendingserviceSpy = TestBed.inject(VendingMachineService) as jasmine.SpyObj<VendingMachineService>
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentComponent)
    component = fixture.componentInstance
    fixture.detectChanges() // calls ngOnInit and refreshes the DOM when called
  })

  const getPayButton = function() {
    const paymentElement: HTMLElement = fixture.nativeElement
    const buttonElement = paymentElement.querySelector('button')!
    return buttonElement
  }

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should accept the right coins', () => {
    expect(component.coins).toEqual(vendingserviceSpy.acceptedCoins)
  })

  it('should show all accepted coins', () => {
    const paymentElement: HTMLElement = fixture.nativeElement
    const coinElements = paymentElement.querySelectorAll('app-coin')!
    expect(coinElements.length).toBe(vendingserviceSpy.acceptedCoins.length)
  })

  it('should display the right credit', () => {
    const paymentElement: HTMLElement = fixture.nativeElement
    const creditElement = paymentElement.querySelector('h4')!
    expect(creditElement.innerText).toContain(vendingserviceSpy.credit.toString())
  })

  it('should disable the pay button when not enough credit', () => {
    vendingserviceSpy.canPay.and.returnValue(false)
    fixture.detectChanges()

    expect(getPayButton().disabled).toBe(true)
  })

  it('should disable the pay button when snack is out of stock', () => {
    vendingserviceSpy.hasStock.and.returnValue(false)
    fixture.detectChanges()

    expect(getPayButton().disabled).toBe(true)
  })

  it('should enable the pay button when there is credit and snack', () => {
    vendingserviceSpy.canPay.and.returnValue(true)
    vendingserviceSpy.hasStock.and.returnValue(true)
    fixture.detectChanges()

    expect(getPayButton().disabled).toBe(false)
  })

  it('should call service.pay when clicking the pay button', () => {
    const btn = getPayButton()
    vendingserviceSpy.canPay.and.returnValue(true)
    vendingserviceSpy.hasStock.and.returnValue(true)
    fixture.detectChanges()
    expect(btn.disabled).toBe(false)
    btn.click()
    expect(vendingserviceSpy.pay).toHaveBeenCalledTimes(1)
  })

  it('should handle the no-credit message correctly', () => {
    const paymentElement: HTMLElement = fixture.nativeElement
    vendingserviceSpy.isShowNoCreditMessage.and.returnValue(true)
    fixture.detectChanges()  
    expect(paymentElement.innerHTML).toContain(NOCREDITMESSAGE)

    vendingserviceSpy.isShowNoCreditMessage.and.returnValue(false)
    fixture.detectChanges()
    expect(paymentElement.innerHTML).not.toContain(NOCREDITMESSAGE)
  })

  it('should handle the out-of-stock message correctly', () => {
    const paymentElement: HTMLElement = fixture.nativeElement
    vendingserviceSpy.isShowNoStockMessage.and.returnValue(true)
    fixture.detectChanges()  
    expect(paymentElement.innerHTML).toContain(NOSTOCKMESSAGE)

    vendingserviceSpy.isShowNoStockMessage.and.returnValue(false)
    fixture.detectChanges()
    expect(paymentElement.innerHTML).not.toContain(NOSTOCKMESSAGE)
  })
})
