import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialLogin } from './social-login.component';

describe('SocialLoginComponent', () => {
  let component: SocialLogin;
  let fixture: ComponentFixture<SocialLogin>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialLogin ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialLogin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
