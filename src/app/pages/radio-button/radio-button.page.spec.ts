import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RadioButtonPage } from './radio-button.page';

describe('RadioButtonPage', () => {
  let component: RadioButtonPage;
  let fixture: ComponentFixture<RadioButtonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioButtonPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RadioButtonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
