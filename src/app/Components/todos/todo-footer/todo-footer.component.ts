import { Component, OnInit } from '@angular/core';
import { TodosService } from 'src/app/Services/todos/todos.service';

@Component({
  selector: 'todo-footer-component',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss'],
})
export class TodoFooterComponent implements OnInit {
  public getListCount = 0;
  constructor(private todos: TodosService) {}

  ngOnInit() {
    this.todos.todoList.subscribe((res: any) => {
      if(res.count){
        this.getListCount = res.count;
      }
    });
  }
}
