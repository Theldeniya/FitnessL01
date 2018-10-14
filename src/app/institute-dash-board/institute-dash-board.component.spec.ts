import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstituteDashBoardComponent } from './institute-dash-board.component';

describe('InstituteDashBoardComponent', () => {
  let component: InstituteDashBoardComponent;
  let fixture: ComponentFixture<InstituteDashBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstituteDashBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstituteDashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
