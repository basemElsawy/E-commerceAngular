import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TogglebuttonsComponent } from './togglebuttons.component';

describe('TogglebuttonsComponent', () => {
  let component: TogglebuttonsComponent;
  let fixture: ComponentFixture<TogglebuttonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TogglebuttonsComponent]
    });
    fixture = TestBed.createComponent(TogglebuttonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
