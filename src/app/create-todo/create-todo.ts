import {Component, inject, OnInit} from '@angular/core';
import { BackendService} from '../shared/backend.service';

@Component({
  selector: 'app-create-todo',
  imports: [],
  templateUrl: './create-todo.html',
  styleUrl: './create-todo.css',
})
export class CreateTodo implements OnInit{

  private bs = inject (BackendService);
  categories: string[] = [];


  ngOnInit() {
    this.bs.getCategories().then(
      categories => this.categories = categories
    );
  }


}
