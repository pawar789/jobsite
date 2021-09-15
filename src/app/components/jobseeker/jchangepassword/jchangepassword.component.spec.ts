import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JchangepasswordComponent } from './jchangepassword.component';

describe('JchangepasswordComponent', () => {
  let component: JchangepasswordComponent;
  let fixture: ComponentFixture<JchangepasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JchangepasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JchangepasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
