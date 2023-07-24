import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { BehaviorSubject, map } from 'rxjs';

@Injectable()
export class TodosService {
  public todoList = new BehaviorSubject<any>(0);
  public todoListObs = this.todoList.asObservable();
  constructor(private http: HttpClient) {}

  getList() {
    const url: any =
      environment.apiUrl.baseUrl + environment.apiUrl.services.todos;

    return this.http.get(url).pipe(
      map(
        (resp: any) => {
          return resp;
        },
        (err: HttpErrorResponse) => {
          return err;
        }
      )
    );
  }

  addTask(task: string) {
    const url: any =
      environment.apiUrl.baseUrl + environment.apiUrl.services.todos;
    const headers = new HttpHeaders().set(
      'Content-Type',
      'application/json; charset=utf-8'
    );
    return this.http
      .post(
        url,
        JSON.stringify({
          todoName: task,
          isComplete: false,
        }),
        { headers }
      )
      .pipe(
        map(
          (resp: any) => {
            return resp;
          },
          (err: HttpErrorResponse) => {
            return err;
          }
        )
      );
  }
}
