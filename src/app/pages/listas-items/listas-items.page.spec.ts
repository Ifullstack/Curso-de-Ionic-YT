import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListasItemsPage } from './listas-items.page';

describe('ListasItemsPage', () => {
  let component: ListasItemsPage;
  let fixture: ComponentFixture<ListasItemsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListasItemsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListasItemsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
