import { TestBed } from '@angular/core/testing';
import { TodoListComponent } from './todo-list.component';

describe('TodoListComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [TodoListComponent]
  }));

  it('should create the component', () => {
    const fixture = TestBed.createComponent(TodoListComponent);
    const todoListComponent = fixture.componentInstance;
    expect(todoListComponent).toBeTruthy();
  });
});
