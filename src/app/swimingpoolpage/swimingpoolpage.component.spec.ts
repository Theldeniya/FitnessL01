import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwimingpoolpageComponent } from './swimingpoolpage.component';

describe('SwimingpoolpageComponent', () => {
  let component: SwimingpoolpageComponent;
  let fixture: ComponentFixture<SwimingpoolpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwimingpoolpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwimingpoolpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
