import { Component } from '@angular/core';
import { TodosService } from 'src/app/services/todos.service';
import { TodoInterface } from 'src/app/types/todo.interface';

@Component({
  selector: 'app-todos-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent {
  text: string = '';

  constructor(
    private todosService: TodosService
  ) {}

  changeText(event: Event): void {
    const target = event.target as HTMLInputElement; // to specify the type of the target of the event
    this.text = target.value;
  }

  addTodo(): void {

    const newTodo: TodoInterface = {
      id: Math.random().toString(8),
      text: this.text,
      isCompleted: false
    }

    this.todosService.addNewTodo(newTodo).subscribe({
      next: (res) => {
        console.log(res)
      },
      error: () => {
        alert('New task not added. Something went wrong')
      }
    })

    this.text = '';
  }

}
