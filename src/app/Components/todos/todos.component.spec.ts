import { TestBed } from '@angular/core/testing';
import { TodosComponent } from './todos.component';

describe('TodosComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [TodosComponent]
  }));

  it('should create the component', () => {
    const fixture = TestBed.createComponent(TodosComponent);
    const todosComponent = fixture.componentInstance;
    expect(todosComponent).toBeTruthy();
  });
});
