import { TestBed } from '@angular/core/testing';

import { DaylisIngredientsService } from './daylis-ingredients.service';

describe('DaylisIngrediendsService', () => {
  let service: DaylisIngredientsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DaylisIngredientsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
