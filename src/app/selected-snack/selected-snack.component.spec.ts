import { ComponentFixture, TestBed } from '@angular/core/testing'

import { SelectedSnackComponent } from './selected-snack.component'
import { VendingMachineService, VendingMachineSize as size } from '../service/vending-machine.service'

describe('SelectedSnackComponent', () => {
  let component: SelectedSnackComponent
  let fixture: ComponentFixture<SelectedSnackComponent>
  let vendingserviceSpy: jasmine.SpyObj<VendingMachineService>

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('VendingMachineService', ['getSelected']) 
    await TestBed.configureTestingModule({
      declarations: [ SelectedSnackComponent ],
      providers: [{provide: 'size', useValue: size.medium}, {provide: VendingMachineService, useValue: spy}]
    })
    .compileComponents()
    vendingserviceSpy = TestBed.inject(VendingMachineService) as jasmine.SpyObj<VendingMachineService>
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedSnackComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should display the selected snack name and price', () => {
    const mockSnack = { name: 'mock-snack', price: 2.85, stock: 1, selected: true, dropIt: false }
    vendingserviceSpy.getSelected.and.returnValue(mockSnack)
    const selectedSnackElement: HTMLElement = fixture.nativeElement
    fixture.detectChanges()  
    expect(selectedSnackElement.innerHTML).toContain(mockSnack.name)
    expect(selectedSnackElement.innerHTML).toContain(mockSnack.price.toString())
  })
})
