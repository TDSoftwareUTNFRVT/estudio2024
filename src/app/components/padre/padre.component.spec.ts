import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadreComponent } from './padre.component';

describe('PadreComponent', () => {
  let component: PadreComponent;
  let fixture: ComponentFixture<PadreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PadreComponent]
    });
    fixture = TestBed.createComponent(PadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
