import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentTodoSwitchComponent } from './component-todo-switch.component';

describe('ComponentTodoSwitchComponent', () => {
  let component: ComponentTodoSwitchComponent;
  let fixture: ComponentFixture<ComponentTodoSwitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentTodoSwitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentTodoSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
