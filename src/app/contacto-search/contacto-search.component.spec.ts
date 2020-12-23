import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoSearchComponent } from './contacto-search.component';

describe('ContactoSearchComponent', () => {
  let component: ContactoSearchComponent;
  let fixture: ComponentFixture<ContactoSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactoSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactoSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
