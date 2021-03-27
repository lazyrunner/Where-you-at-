import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhereYouAtComponent } from './where-you-at.component';

describe('WhereYouAtComponent', () => {
  let component: WhereYouAtComponent;
  let fixture: ComponentFixture<WhereYouAtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhereYouAtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhereYouAtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
