import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartPay } from './cart-pay';

describe('CartPay', () => {
  let component: CartPay;
  let fixture: ComponentFixture<CartPay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartPay]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartPay);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
