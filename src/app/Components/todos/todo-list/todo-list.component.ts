import { Component, OnInit } from '@angular/core';
import { TodosService } from 'src/app/Services/todos/todos.service';

@Component({
  selector: 'todo-list-component',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  public todosList: Array<any> = [];

  constructor(private todos: TodosService) {}

  ngOnInit() {
    this.todos.getList().subscribe(
      (resp) => {
        const { data } = resp;
        this.todosList = data;
        this.todos.todoList.next({count: data.length});
      },
      (err) => {
        return err;
      }
    );
    this.todos.todoList.subscribe((res: any) => {
      if(res.task){
        this.todosList.push(res.task);
      }
    });
  }

  addTask(event: Event){
    const { value } = (event.target as HTMLInputElement);
    this.todos.addTask(value).subscribe(res => {
      this.todos.todoList.next({task: res.data});
    });
  }
}
