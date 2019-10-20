import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RespostComponent } from './respost.component';

describe('RespostComponent', () => {
  let component: RespostComponent;
  let fixture: ComponentFixture<RespostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RespostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RespostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
