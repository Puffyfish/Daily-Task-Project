import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';
import { MatCheckboxModule} from '@angular/material/checkbox'
import { ReactiveFormsModule } from '@angular/forms';

import { TodosComponent } from './todos.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { NewComponent } from 'src/app/pages/todos/new/new.component';
import { FilterComponent } from './filter/filter.component';
import { HeaderComponent } from 'src/app/shared/header/header.component';
import { DatePipe } from '@angular/common';

const routes: Routes = [
  {path: '', component: TodosComponent}
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    HeaderComponent,
    RouterModule.forChild(routes)
  ],
  declarations: [
    TodosComponent,
    TaskItemComponent,
    NewComponent,
    FilterComponent
  ],
  providers: [DatePipe],
  exports: [
    HeaderComponent,
    TodosComponent,
    TaskItemComponent,
    NewComponent,
    FilterComponent,
    MaterialModule,
    RouterModule
  ]
})
export class TodosModule { }
