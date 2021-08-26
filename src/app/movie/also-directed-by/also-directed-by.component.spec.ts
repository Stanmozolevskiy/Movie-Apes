import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlsoDirectedByComponent } from './also-directed-by.component';

describe('AlsoDirectedByComponent', () => {
  let component: AlsoDirectedByComponent;
  let fixture: ComponentFixture<AlsoDirectedByComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlsoDirectedByComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlsoDirectedByComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
