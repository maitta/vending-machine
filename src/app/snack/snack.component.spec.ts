import { ComponentFixture, TestBed } from '@angular/core/testing'

import { SnackComponent } from './snack.component'
import { VendingMachineService, VendingMachineSize as size } from '../service/vending-machine.service'
import { Initial, Snack } from '../models/snack'
import getSnack from '../models/snack-factory'

describe('SnackComponent', () => {
  let component: SnackComponent
  let fixture: ComponentFixture<SnackComponent>
  let vendingServiceSpy: VendingMachineService
  const snack = getSnack()

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('vendingService', ['select'])
    await TestBed.configureTestingModule({
      declarations: [ SnackComponent ],
      providers: [{provide: 'size', useValue: size.medium}, {provide: VendingMachineService, useValue: spy}]
    })
    .compileComponents()
    vendingServiceSpy = TestBed.inject(VendingMachineService) as jasmine.SpyObj<VendingMachineService>;
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(SnackComponent)
    component = fixture.componentInstance
    component.snack = snack
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should call the service select', () => {
    component.select()
    expect(vendingServiceSpy.select).toHaveBeenCalledTimes(1)
    expect(vendingServiceSpy.select).toHaveBeenCalledWith(snack)
  })

  it('should call the component select when clicking the element', () => {
    const snackElement: HTMLElement = fixture.nativeElement
    const snackDivs = snackElement.getElementsByClassName('grid-element')!
    expect(snackDivs.length).withContext("Only one element should have the grid-element class in this component").toBe(1);
    (snackDivs[0] as HTMLElement).click()
    expect(vendingServiceSpy.select).toHaveBeenCalledTimes(1)
    expect(vendingServiceSpy.select).toHaveBeenCalledWith(snack)
  })

  it('should highlight selected elements', () => {
    const snackElement: HTMLElement = fixture.nativeElement
    const selectedSnack = snackElement.getElementsByClassName('selected')!
    expect(selectedSnack.length).toBe(0);
    snack.selected = true
    fixture.detectChanges()
    expect(selectedSnack.length).toBe(1);
  })

  it('should perform the snack dropping animation correctly', () => {
    const snackElement: HTMLElement = fixture.nativeElement
    const soldSnack = snackElement.getElementsByClassName('sold')!
    expect(soldSnack.length).toBe(0);
    snack.dropIt = true
    fixture.detectChanges()
    expect(soldSnack.length).toBe(1);
  })

  it('should display the right snack image', () => {
    const snackElement: HTMLElement = fixture.nativeElement
    const snackImage = snackElement.querySelector('img')!
    expect(snack.category!.getImageUrl()).withContext("Image URL is missing for snack").toBeDefined()
    const snackUrl = snackImage.baseURI + snack.category!.getImageUrl()
    expect(snackImage.src).toBe(snackUrl)
  })

  it('should display the right alt text for the image', () => {
    const snackElement: HTMLElement = fixture.nativeElement
    const snackImage = snackElement.querySelector('img')!

    expect(snack.category!.name).withContext("Image alt text is missing for snack").toBeDefined()
    expect(snackImage.alt).toBe(snack.category!.name)
  })

  it('should display properly the snack description and stock', () => {
    const snackElement: HTMLElement = fixture.nativeElement
    expect(snackElement.innerHTML).toContain(snack.name)
    expect(snackElement.innerHTML).toContain(snack.stock.toString())
    expect(snackElement.innerHTML).toContain(snack.price.toString())
  })
})
