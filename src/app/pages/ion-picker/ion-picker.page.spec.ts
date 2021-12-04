import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonPickerPage } from './ion-picker.page';

describe('IonPickerPage', () => {
  let component: IonPickerPage;
  let fixture: ComponentFixture<IonPickerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonPickerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonPickerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
