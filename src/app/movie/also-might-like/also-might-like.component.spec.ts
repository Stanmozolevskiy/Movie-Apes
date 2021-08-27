import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlsoMightLikeComponent } from './also-might-like.component';

describe('AlsoMightLikeComponent', () => {
  let component: AlsoMightLikeComponent;
  let fixture: ComponentFixture<AlsoMightLikeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlsoMightLikeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlsoMightLikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
