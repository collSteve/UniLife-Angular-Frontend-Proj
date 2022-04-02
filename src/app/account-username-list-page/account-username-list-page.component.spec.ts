import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountUsernameListPageComponent } from './account-username-list-page.component';

describe('AccountUsernameListPageComponent', () => {
  let component: AccountUsernameListPageComponent;
  let fixture: ComponentFixture<AccountUsernameListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountUsernameListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountUsernameListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
