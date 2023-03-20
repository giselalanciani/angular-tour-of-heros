import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DcDetailComponent } from './dc-detail.component';

describe('DcDetailComponent', () => {
  let component: DcDetailComponent;
  let fixture: ComponentFixture<DcDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DcDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DcDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
