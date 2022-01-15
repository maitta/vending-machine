import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackComponent } from './snack.component';
import { VendingMachineSize as size } from '../service/vending-machine.service';
import { Initial, Snack } from '../models/snack';

describe('SnackComponent', () => {
  let component: SnackComponent;
  let fixture: ComponentFixture<SnackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnackComponent ],
      providers: [{provide: 'size', useValue: size.medium}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SnackComponent);
    component = fixture.componentInstance;
    component.snack = new Initial();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
