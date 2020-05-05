import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignOrderFormComponent } from './design-order-form.component';

describe('DesignOrderFormComponent', () => {
  let component: DesignOrderFormComponent;
  let fixture: ComponentFixture<DesignOrderFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignOrderFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignOrderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
