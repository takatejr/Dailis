import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BetstatDetailsComponent } from './betstat-details.component';

describe('BetstatDetailsComponent', () => {
  let component: BetstatDetailsComponent;
  let fixture: ComponentFixture<BetstatDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BetstatDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetstatDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
