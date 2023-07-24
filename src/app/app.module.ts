import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TodosComponent } from './Components/todos/todos.component';
import { TodosHeaderComponent } from './Components/todos/todo-header/todo-header.component';
import { TodoListComponent } from './Components/todos/todo-list/todo-list.component';
import { TodoFooterComponent } from './Components/todos/todo-footer/todo-footer.component';
import { TodosService } from './Services/todos/todos.service';

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
    HttpClientModule,
  ],
  providers: [
    TodosService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
