import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedSnackComponent } from './selected-snack.component';

describe('SelectedSnackComponent', () => {
  let component: SelectedSnackComponent;
  let fixture: ComponentFixture<SelectedSnackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedSnackComponent ]
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
