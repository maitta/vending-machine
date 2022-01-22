import { ComponentFixture, TestBed } from '@angular/core/testing'
import { AppComponent } from './app.component'
import { VendingMachineSize as size } from './service/vending-machine.service'

describe('AppComponent', () => {
  let app: AppComponent
  let fixture: ComponentFixture<AppComponent>
  const SIZE = size.medium

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [{provide: 'size', useValue: SIZE}]
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent)
    app = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create the app', () => {
    expect(app).toBeTruthy()
  })

  it(`should have as title 'Vending Machine'`, () => {
    expect(app.title).toEqual('Vending Machine')
  })

  it('should render a description', () => {
    const compiled = fixture.nativeElement as HTMLElement
    expect(compiled.querySelector('h1')?.textContent).toContain('Vending machine simulation')
  })

  it('should render the grid of snacks', () => {
    const appElement: HTMLElement = fixture.nativeElement
    const gridDiv = appElement.getElementsByClassName('grid')!
    expect(gridDiv.length).toBe(1)
  })

  it('should render as many snacks as the machine can fit', () => {
    const appElement: HTMLElement = fixture.nativeElement
    const snackElements = appElement.querySelectorAll('app-snack')!
    expect(snackElements.length).toBe(SIZE)
  })

  it('should display selected snack information', () =>{
    const appElement: HTMLElement = fixture.nativeElement
    const selectionElement = appElement.querySelectorAll('app-selected-snack')!
    expect(selectionElement.length).toBe(1)
  })

  it('should display payment information', () =>{
    const appElement: HTMLElement = fixture.nativeElement
    const selectionElement = appElement.querySelectorAll('app-payment')!
    expect(selectionElement.length).toBe(1)
  })
})
