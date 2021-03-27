import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IAmHereComponent } from './iam-here.component';

describe('IAmHereComponent', () => {
  let component: IAmHereComponent;
  let fixture: ComponentFixture<IAmHereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IAmHereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IAmHereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
