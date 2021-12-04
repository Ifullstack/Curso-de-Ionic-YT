import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonToolbarPage } from './ion-toolbar.page';

describe('IonToolbarPage', () => {
  let component: IonToolbarPage;
  let fixture: ComponentFixture<IonToolbarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonToolbarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonToolbarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
