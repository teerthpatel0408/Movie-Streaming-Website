import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnsubscribeComponent } from './onsubscribe.component';

describe('OnsubscribeComponent', () => {
  let component: OnsubscribeComponent;
  let fixture: ComponentFixture<OnsubscribeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnsubscribeComponent]
    });
    fixture = TestBed.createComponent(OnsubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
