import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DancingpageComponent } from './dancingpage.component';

describe('DancingpageComponent', () => {
  let component: DancingpageComponent;
  let fixture: ComponentFixture<DancingpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DancingpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DancingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
