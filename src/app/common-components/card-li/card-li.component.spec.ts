import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLiComponent } from './card-li.component';

describe('CardLiComponent', () => {
  let component: CardLiComponent;
  let fixture: ComponentFixture<CardLiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardLiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardLiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
