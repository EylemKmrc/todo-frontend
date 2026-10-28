import {Component, inject, OnInit} from '@angular/core';
import {Todo} from '../shared/todo';
import {ActivatedRoute} from '@angular/router';
import {BackendService} from '../shared/backend.service';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-edit-todo',
  imports: [ReactiveFormsModule],
  templateUrl: './edit-todo.html',
  styleUrl: './edit-todo.css',
})
export class EditTodo implements OnInit {

  private route = inject(ActivatedRoute);
  private bs = inject(BackendService);
  categories: string[] = [];

  todo?: Todo;

  form = new FormGroup({
    titleControl: new FormControl<string>(''),
    categoryControl: new FormControl<string>(''),
    dueDateControl: new FormControl<string>(''),
  });

  //Get one Todo per id
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.bs.getOne(id).then(
        todo => {
          this.todo = todo;

          this.form.patchValue({
            titleControl: todo.title,
            categoryControl: todo.category,
            dueDateControl: todo.dueDate?.substring(0, 10) || '',
          });
          this.bs.getCategories().then(
            categories => this.categories = categories
          );
        });
    }
  }
}
