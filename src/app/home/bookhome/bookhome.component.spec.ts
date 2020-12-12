import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookhomeComponent } from './bookhome.component';

describe('BookhomeComponent', () => {
  let component: BookhomeComponent;
  let fixture: ComponentFixture<BookhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
