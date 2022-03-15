import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualPostPageComponent } from './individual-post-page.component';

describe('IndividualPostPageComponent', () => {
  let component: IndividualPostPageComponent;
  let fixture: ComponentFixture<IndividualPostPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndividualPostPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualPostPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
