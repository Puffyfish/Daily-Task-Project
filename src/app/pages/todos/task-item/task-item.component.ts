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
  @Output() toDelete = new EventEmitter<TodoInterface>();
  @Output() toComplete = new EventEmitter<TodoInterface>();

  constructor(
    private todosService: TodosService
    ) {}


  onClick(todo: TodoInterface) {
    todo.isCompleted = !todo.isCompleted;
    this.toComplete.emit(todo);
  }

  onDelete(todo: TodoInterface) {
    console.log('delete button clicked:', todo)
    this.toDelete.emit(todo);
  }
}
