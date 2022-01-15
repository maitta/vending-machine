import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedSnackComponent } from './selected-snack.component';
import { VendingMachineSize as size } from '../service/vending-machine.service';

describe('SelectedSnackComponent', () => {
  let component: SelectedSnackComponent;
  let fixture: ComponentFixture<SelectedSnackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedSnackComponent ],
      providers: [{provide: 'size', useValue: size.medium}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedSnackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
