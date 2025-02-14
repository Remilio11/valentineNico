import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValentinComponent } from './valentin.component';

describe('ValentinComponent', () => {
  let component: ValentinComponent;
  let fixture: ComponentFixture<ValentinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ValentinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValentinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
