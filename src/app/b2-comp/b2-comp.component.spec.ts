import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B2CompComponent } from './b2-comp.component';

describe('B2CompComponent', () => {
  let component: B2CompComponent;
  let fixture: ComponentFixture<B2CompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B2CompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(B2CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
