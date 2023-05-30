import { Component, EventEmitter, Output } from '@angular/core';
import { TodoInterface } from 'src/app/types/todo.interface';

@Component({
  selector: 'app-todos-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent {
  text: string = '';
  @Output() onAddTask: EventEmitter<TodoInterface> = new EventEmitter<TodoInterface>();

  constructor() {}

  changeText(event: Event): void {
    // to specify the type of the target of the event
    const target = event.target as HTMLInputElement; 
    this.text = target.value;
  }

  addTodo(): void {

    const newTodo: TodoInterface = {
      id: Math.random().toString(8),
      text: this.text,
      isCompleted: false
    }

    this.onAddTask.emit(newTodo);

    this.text = '';
  }

}
