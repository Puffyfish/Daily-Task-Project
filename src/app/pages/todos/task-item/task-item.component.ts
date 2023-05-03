import { Component, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoInterface } from 'src/app/types/todo.interface';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})

export class TaskItemComponent {
  tasks: Observable<TodoInterface[]>;
  // @Input() inputTask!: Todos;
  @Output() checkClicked = new EventEmitter();

  constructor(
    private todosService: TodosService
    ) {
      this.tasks = this.todosService.getTodos()
      // to get the default values so it wont be undefinid initially
      // benefit: no subscription meaning no need to unsubscribe ==> LEANER CODE
      // through this, we dont need ngOnInit and onDestory
    }


  onClick() {
    console.log('this check is clicked.');
    this.checkClicked.emit();
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
