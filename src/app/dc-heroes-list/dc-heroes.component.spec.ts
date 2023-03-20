import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DcHeroesComponent } from './dc-heroes.component';

describe('DcHeroesComponent', () => {
  let component: DcHeroesComponent;
  let fixture: ComponentFixture<DcHeroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DcHeroesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DcHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
