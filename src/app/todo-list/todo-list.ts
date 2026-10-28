import {Component, inject, OnInit} from '@angular/core';
import { BackendService } from '../shared/backend.service';
import { Todo } from '../shared/todo';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-todo-list',
  imports: [
    RouterLink
  ],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css',
})
export class TodoList implements OnInit{

  private bs = inject (BackendService);
  todos: Todo[] = [];

  //Get all Todos
  ngOnInit(): void {
    this.bs.getAll().then(
      todos => this.todos = todos
    );
}


}
