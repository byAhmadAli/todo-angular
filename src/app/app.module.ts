import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { TodosHeaderComponent } from './todos/todo-header/todo-header.component';
import { TodoListComponent } from './todos/todo-list/todo-list.component';
import { TodoFooterComponent } from './todos/todo-footer/todo-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodosHeaderComponent,
    TodoListComponent,
    TodoFooterComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
