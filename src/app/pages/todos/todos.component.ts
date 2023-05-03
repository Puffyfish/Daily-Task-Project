import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { TodoInterface } from 'src/app/types/todo.interface';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  newTaskPage: boolean = false;

  constructor(
    private todosService: TodosService,
    private router: Router,
    private route: ActivatedRoute) {
    }

  ngOnInit(): void {

  }


  toMove(data: TodoInterface) {
    // this.todosService.udpateProgress(data)
    // .subscribe(
    //   (task) => data = task
    // )
    // console.log(data);
  }
}
