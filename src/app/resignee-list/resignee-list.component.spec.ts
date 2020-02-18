import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResigneeListComponent } from './resignee-list.component';

describe('ResigneeListComponent', () => {
  let component: ResigneeListComponent;
  let fixture: ComponentFixture<ResigneeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResigneeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResigneeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
