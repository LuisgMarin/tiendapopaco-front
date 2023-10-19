import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOffersAdminComponent } from './list-offers-admin.component';

describe('ListOffersAdminComponent', () => {
  let component: ListOffersAdminComponent;
  let fixture: ComponentFixture<ListOffersAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOffersAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOffersAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
