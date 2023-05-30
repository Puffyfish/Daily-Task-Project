import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoInterface } from 'src/app/types/todo.interface';
import { TodosService } from 'src/app/services/todos.service';


@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class TaskItemComponent {
  @Input('todo') todoProps!: TodoInterface;

  constructor(
    private todosService: TodosService
    ) {

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
