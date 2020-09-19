import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaylisComponent } from './daylis.component';

describe('DaylisComponent', () => {
  let component: DaylisComponent;
  let fixture: ComponentFixture<DaylisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaylisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaylisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
