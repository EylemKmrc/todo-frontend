import {Component, inject, OnInit} from '@angular/core';
import { BackendService} from '../shared/backend.service';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-todo',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './create-todo.html',
  styleUrl: './create-todo.css',
})
export class CreateTodo implements OnInit{

  private bs = inject (BackendService);
  categories: string[] = [];
  private router = inject(Router);


  //Get all Categories
  ngOnInit() {
    this.bs.getCategories().then(
      categories => this.categories = categories
    );
  }

  //Create a new todo
  form = new FormGroup({
    titleControl: new FormControl<string>(''),
    categoryControl: new FormControl<string>(''),
    dueDateControl: new FormControl<string>(''),
  });

  create(): void {
    const values = this.form.value;

    const newTodo = {
      title: values.titleControl || '',
      category: values.categoryControl || '',
      dueDate: values.dueDateControl || undefined,
    };

    this.bs.create(newTodo)
      .then(() => this.router.navigate(['/todos']))
  }



}
