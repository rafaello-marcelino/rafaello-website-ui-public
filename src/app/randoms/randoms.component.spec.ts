import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomsComponent } from './randoms.component';

describe('RandomsComponent', () => {
  let component: RandomsComponent;
  let fixture: ComponentFixture<RandomsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RandomsComponent]
    });
    fixture = TestBed.createComponent(RandomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
