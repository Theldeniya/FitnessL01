import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPackageDetailsComponent } from './edit-package-details.component';

describe('EditPackageDetailsComponent', () => {
  let component: EditPackageDetailsComponent;
  let fixture: ComponentFixture<EditPackageDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPackageDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPackageDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
