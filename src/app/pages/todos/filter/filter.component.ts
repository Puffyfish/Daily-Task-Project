import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { TodosService } from 'src/app/services/todos.service';
import { FilterEnum } from 'src/app/types/FilterEnum';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  noTodosClass$: Observable<boolean>;
  filter$: Observable<FilterEnum>;
  filterEnum = FilterEnum;

  constructor( private todosService: TodosService){
    this.noTodosClass$ = this.todosService.getTodos()
      .pipe(
        map((todos) => todos.length === 0)
      );
      this.filter$ = this.todosService.filter$;
  }

  changeFilter(event: Event, filterName: FilterEnum): void {
    this.todosService.changeFilter(filterName);
  }
}
