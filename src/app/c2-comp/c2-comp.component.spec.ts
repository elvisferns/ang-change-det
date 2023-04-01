import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C2CompComponent } from './c2-comp.component';

describe('C2CompComponent', () => {
  let component: C2CompComponent;
  let fixture: ComponentFixture<C2CompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C2CompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C2CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
