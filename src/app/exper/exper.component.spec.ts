import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperComponent } from './exper.component';

describe('ExperComponent', () => {
  let component: ExperComponent;
  let fixture: ComponentFixture<ExperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExperComponent]
    });
    fixture = TestBed.createComponent(ExperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
