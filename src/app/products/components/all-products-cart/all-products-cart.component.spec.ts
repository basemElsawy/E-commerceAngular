import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllProductsCartComponent } from './all-products-cart.component';

describe('AllProductsCartComponent', () => {
  let component: AllProductsCartComponent;
  let fixture: ComponentFixture<AllProductsCartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllProductsCartComponent]
    });
    fixture = TestBed.createComponent(AllProductsCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
