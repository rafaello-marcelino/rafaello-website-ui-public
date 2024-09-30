import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotohomeComponent } from './photohome.component';

describe('PhotohomeComponent', () => {
  let component: PhotohomeComponent;
  let fixture: ComponentFixture<PhotohomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhotohomeComponent]
    });
    fixture = TestBed.createComponent(PhotohomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
