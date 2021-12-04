import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonSelectPage } from './ion-select.page';

describe('IonSelectPage', () => {
  let component: IonSelectPage;
  let fixture: ComponentFixture<IonSelectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonSelectPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonSelectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
