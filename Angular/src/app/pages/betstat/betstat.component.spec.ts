import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BetstatComponent } from './betstat.component';

describe('BetstatComponent', () => {
  let component: BetstatComponent;
  let fixture: ComponentFixture<BetstatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BetstatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetstatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
