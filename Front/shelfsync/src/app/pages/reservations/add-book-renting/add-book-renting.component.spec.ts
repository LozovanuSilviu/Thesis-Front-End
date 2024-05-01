import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBookRentingComponent } from './add-book-renting.component';

describe('AddBookRentingComponent', () => {
  let component: AddBookRentingComponent;
  let fixture: ComponentFixture<AddBookRentingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddBookRentingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddBookRentingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
