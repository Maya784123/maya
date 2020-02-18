import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewResigneeComponent } from './new-resignee.component';

describe('NewResigneeComponent', () => {
  let component: NewResigneeComponent;
  let fixture: ComponentFixture<NewResigneeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewResigneeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewResigneeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
