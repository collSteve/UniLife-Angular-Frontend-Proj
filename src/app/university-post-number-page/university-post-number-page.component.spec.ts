import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityPostNumberPageComponent } from './university-post-number-page.component';

describe('UniversityPostNumberPageComponent', () => {
  let component: UniversityPostNumberPageComponent;
  let fixture: ComponentFixture<UniversityPostNumberPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversityPostNumberPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityPostNumberPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
