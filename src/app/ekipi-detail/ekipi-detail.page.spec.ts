import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EkipiDetailPage } from './ekipi-detail.page';

describe('EkipiDetailPage', () => {
  let component: EkipiDetailPage;
  let fixture: ComponentFixture<EkipiDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EkipiDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EkipiDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
