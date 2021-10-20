import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTrailersComponent } from './home-trailers.component';

describe('HomeTrailersComponent', () => {
  let component: HomeTrailersComponent;
  let fixture: ComponentFixture<HomeTrailersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeTrailersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTrailersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
