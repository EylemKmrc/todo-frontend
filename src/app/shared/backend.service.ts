import { Injectable } from '@angular/core';
import { Todo} from './todo'; //Todo interface importieren für getAll()

@Injectable({
  providedIn: 'root',
})
export class BackendService {

  apiURL = 'http://localhost:3000'

  constructor() { }

  //Get alle Categorien
  async getCategories( ): Promise<string[]> {
    let response = await fetch(this.apiURL + '/categories');
    let categories = await response.json();
    console.log('categories in service (getCategories): ', categories);
    return categories;
  }

  //Create a new Todo
  async create(newTodo: { title: string; category: string; dueDate?: string }) {
    let response = await fetch(this.apiURL + '/todos', {
      method: 'POST',
      body: JSON.stringify(newTodo),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    let todo = await response.json();
    return todo;
  }

  //Get All Todos
  async getAll(): Promise<Todo[]> {
    let response = await fetch(this.apiURL + '/todos');
    let todos = await response.json();
    console.log('todos in service (getAll): ', todos);
    return todos;
  }

  // Get one Todo per id
  async getOne(id: string): Promise<Todo> {
    let response = await fetch(this.apiURL + '/todos/' + id);
    let todo = await response.json();
    return todo;
  }


}
