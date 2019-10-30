import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EkipiPage } from './ekipi.page';

describe('EkipiPage', () => {
  let component: EkipiPage;
  let fixture: ComponentFixture<EkipiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EkipiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EkipiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
