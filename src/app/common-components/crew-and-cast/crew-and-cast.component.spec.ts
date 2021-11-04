import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewAndCastComponent } from './crew-and-cast.component';

describe('CrewAndCastComponent', () => {
  let component: CrewAndCastComponent;
  let fixture: ComponentFixture<CrewAndCastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrewAndCastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrewAndCastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
