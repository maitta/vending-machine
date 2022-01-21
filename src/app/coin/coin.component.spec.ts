import { ComponentFixture, TestBed } from '@angular/core/testing'

import { CoinComponent } from './coin.component'
import { Coin, Dollar, Quarter } from '../models/coin'
import { VendingMachineService, VendingMachineSize as size } from '../service/vending-machine.service'

describe('CoinComponent', () => {
  let component: CoinComponent
  let fixture: ComponentFixture<CoinComponent>
  let vendingserviceSpy: jasmine.SpyObj<VendingMachineService>
  let coin = new Quarter()

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('VendingMachineService', ['insertCoin'])    
    await TestBed.configureTestingModule({
      declarations: [ CoinComponent ],
      providers: [CoinComponent, {provide: 'size', useValue: size.medium}, { provide: VendingMachineService, useValue: spy }]
    })
    .compileComponents() 
    vendingserviceSpy = TestBed.inject(VendingMachineService) as jasmine.SpyObj<VendingMachineService>
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinComponent)
    component = fixture.componentInstance
    component.coin = coin 
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should have the correct css class', () => {
    const coinElement: HTMLElement = fixture.nativeElement
    const div = coinElement.querySelector('div')!
    expect(div.className).toEqual('coin')
  })

  it('should insert coin', () => {
    component.insertCoin()
    expect(vendingserviceSpy.insertCoin.calls.count()).withContext('insert coin service method was called once').toBe(1)
    expect(vendingserviceSpy.insertCoin).toHaveBeenCalledWith(coin)
  })

  it('should call insert coin on click', () => {
    const coinElement: HTMLElement = fixture.nativeElement
    const img = coinElement.querySelector('img')!
    img.click()
    expect(vendingserviceSpy.insertCoin).toHaveBeenCalledTimes(1)
  })

  it('should have correct image url', () => {
    const coinElement: HTMLElement = fixture.nativeElement
    const img = coinElement.querySelector('img')!
    expect(img.src).toEqual(img.baseURI + coin.getImageUrl())
  })
})
