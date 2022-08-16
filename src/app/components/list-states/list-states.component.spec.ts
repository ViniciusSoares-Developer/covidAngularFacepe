import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStatesComponent } from './list-states.component';

describe('ListStatesComponent', () => {
  let component: ListStatesComponent;
  let fixture: ComponentFixture<ListStatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListStatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListStatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
