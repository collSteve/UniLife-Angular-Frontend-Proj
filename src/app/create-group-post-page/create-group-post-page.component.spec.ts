import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGroupPostPageComponent } from './create-group-post-page.component';

describe('CreateGroupPostPageComponent', () => {
  let component: CreateGroupPostPageComponent;
  let fixture: ComponentFixture<CreateGroupPostPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateGroupPostPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateGroupPostPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
