import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonChipPage } from './ion-chip.page';

describe('IonChipPage', () => {
  let component: IonChipPage;
  let fixture: ComponentFixture<IonChipPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonChipPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonChipPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
