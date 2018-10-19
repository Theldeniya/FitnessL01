import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GympageComponent } from './gympage.component';

describe('GympageComponent', () => {
  let component: GympageComponent;
  let fixture: ComponentFixture<GympageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GympageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GympageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
