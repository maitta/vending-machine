import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinComponent } from './coin.component';
import { Coin, Quarter } from '../models/coin';
import { VendingMachineSize as size } from '../service/vending-machine.service';

describe('CoinComponent', () => {
  let component: CoinComponent;
  let fixture: ComponentFixture<CoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoinComponent ],
      providers: [{provide: 'size', useValue: size.medium}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinComponent);
    component = fixture.componentInstance;
    component.coin = new Quarter();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
