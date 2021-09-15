import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaserComponent } from './heaser.component';

describe('HeaserComponent', () => {
  let component: HeaserComponent;
  let fixture: ComponentFixture<HeaserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
