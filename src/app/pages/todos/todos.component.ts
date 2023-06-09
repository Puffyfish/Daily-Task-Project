import { Component, OnInit } from '@angular/core';
import { map, combineLatestWith, Subscription } from 'rxjs';
import { TodosService } from 'src/app/services/todos.service';
import { FilterEnum } from 'src/app/types/FilterEnum';
import { TodoInterface } from 'src/app/types/todo.interface';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todayNumber: number = Date.now();
  tasks: TodoInterface[] = [];
  subscription!: Subscription;
  completedTasks!: number;
  totalTasks!: number;

  constructor(
    private todosService: TodosService
    ) {
      this.todosService.todosSubject.subscribe(
        (todos) => {
          this.totalTasks = todos.length
      })

      this.todosService.todosSubject.pipe(
        map(
          (todos) => {
            return todos.filter((todo) => todo.isCompleted).length
          }
        )
      )
      .subscribe((todos) => this.completedTasks = todos)
     }

  ngOnInit(): void {
    // <<< TO BE IMPROVED: not updating automatically when a task is deleted >>>
    // gets the tasks with the filter function enabled
    this.subscription = this.todosService.getTodos().pipe(
        combineLatestWith(this.todosService.filter$),
        map(([todos, filter]: [TodoInterface[], FilterEnum]) => {
          if (filter === FilterEnum.active) {
            return todos.filter(todo => !todo.isCompleted);
          } else if (filter === FilterEnum.completed) {
            return todos.filter(todo => todo.isCompleted);
          }
          return todos;
        })
      )
      .subscribe((filteredTodos: TodoInterface[]) => {
            this.tasks = filteredTodos;
          });
      
  }

  addTask(todo: TodoInterface) {
    this.todosService.addNewTodo(todo).subscribe(
      (todo) => this.tasks.push(todo)
    )
  }

  onDelete(todo: TodoInterface) {
    this.todosService.deleteTodo(todo).subscribe({
      next: (res) => {
        alert('Successfully deleted ' + todo.text);
      },
      error: (err) => {
        alert(err);
      }
    });
  }

  onComplete(todo: TodoInterface) {
    this.todosService.archiveTodos(todo).subscribe({
      next: (res) => {
        alert('You have completed this task:' + todo.text)
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}