import { Routes } from '@angular/router';
import {Welcome} from './welcome/welcome';
import {TodoList} from './todo-list/todo-list';
import {CreateTodo} from './create-todo/create-todo';
import {EditTodo} from './edit-todo/edit-todo';

export const routes: Routes = [
  { path: "", component: Welcome, pathMatch: 'full' },  //als Erstes wird diese Seite aufgerufen unter http://localhost:4200
  { path: "create", component: CreateTodo },
  { path: "todos", component: TodoList},
  { path: "edit/:id", component: EditTodo}
];
