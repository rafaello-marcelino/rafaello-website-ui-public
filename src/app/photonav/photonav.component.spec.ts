import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotonavComponent } from './photonav.component';

describe('PhotonavComponent', () => {
  let component: PhotonavComponent;
  let fixture: ComponentFixture<PhotonavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhotonavComponent]
    });
    fixture = TestBed.createComponent(PhotonavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
