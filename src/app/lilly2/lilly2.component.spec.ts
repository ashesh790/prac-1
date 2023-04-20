import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lilly2Component } from './lilly2.component';

describe('Lilly2Component', () => {
  let component: Lilly2Component;
  let fixture: ComponentFixture<Lilly2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lilly2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lilly2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
