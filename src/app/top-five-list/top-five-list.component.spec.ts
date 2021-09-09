import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopFiveListComponent } from './top-five-list.component';

describe('TopFiveListComponent', () => {
  let component: TopFiveListComponent;
  let fixture: ComponentFixture<TopFiveListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopFiveListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopFiveListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
