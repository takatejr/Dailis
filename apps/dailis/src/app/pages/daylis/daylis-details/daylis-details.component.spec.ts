import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaylisDetailsComponent } from './daylis-details.component';

describe('DaylisDetailsComponent', () => {
  let component: DaylisDetailsComponent;
  let fixture: ComponentFixture<DaylisDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaylisDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaylisDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
