import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ImagenesIconosPage } from './imagenes-iconos.page';

describe('ImagenesIconosPage', () => {
  let component: ImagenesIconosPage;
  let fixture: ComponentFixture<ImagenesIconosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagenesIconosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ImagenesIconosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
