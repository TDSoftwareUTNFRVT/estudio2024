import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RickComponent } from './rick.component';

describe('RickComponent', () => {
  let component: RickComponent;
  let fixture: ComponentFixture<RickComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RickComponent]
    });
    fixture = TestBed.createComponent(RickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
