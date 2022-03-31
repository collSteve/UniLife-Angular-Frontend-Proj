import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualGroupPageComponent } from './individual-group-page.component';

describe('IndividualGroupPageComponent', () => {
  let component: IndividualGroupPageComponent;
  let fixture: ComponentFixture<IndividualGroupPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndividualGroupPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualGroupPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
