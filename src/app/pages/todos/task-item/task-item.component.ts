import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { combineLatest, filter, map, Observable } from 'rxjs';
import { TodoInterface } from 'src/app/types/todo.interface';
import { TodosService } from 'src/app/services/todos.service';
import { FilterEnum } from 'src/app/types/FilterEnum';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class TaskItemComponent {
  tasks$: Observable<TodoInterface[]>;

  constructor(
    private todosService: TodosService
    ) {
      this.tasks$ = combineLatest(
        this.todosService.getTodos(),
        this.todosService.filter$
      ).pipe(map(([todos, filter]: [TodoInterface[], FilterEnum]) => {
        if (filter === FilterEnum.active) {
          return todos.filter( todo => !todo.isCompleted)
        } else if (filter === FilterEnum.completed) {
          return todos.filter( (todo) => todo.isCompleted)
        }
        console.log('combine', todos, filter);
        return todos;
      }));
    }


  onClick(todo: TodoInterface) {
    todo.isCompleted = !todo.isCompleted;
    this.todosService.archiveTodos(todo).subscribe();
    console.log('this check is clicked;', todo.isCompleted);
  }

  onDelete(data: TodoInterface) {
    console.log('deleteReminder:', data)
    this.todosService.deleteTodo(data).subscribe({
      next: (res) => {
        alert('Successfully deleted ' + data.text)
      },
      error: (err) => {
        alert(err);
      }
    })
  }
}
