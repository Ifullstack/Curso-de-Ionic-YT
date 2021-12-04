import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonDatetimePage } from './ion-datetime.page';

describe('IonDatetimePage', () => {
  let component: IonDatetimePage;
  let fixture: ComponentFixture<IonDatetimePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonDatetimePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonDatetimePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
