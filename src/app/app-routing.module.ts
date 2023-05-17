import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {path: '', redirectTo: 'todos', pathMatch: 'full'},
  {path: 'todos', loadChildren:
      () => import('./pages/todos/todos.module')
      .then(m => m.TodosModule)},
  {path: 'reminders', loadChildren:
      () => import('./pages/reminders/reminders.module')
      .then(m => m.RemindersModule)},
  {path: 'login', loadChildren:
      () => import('./pages/auth/auth.module')
      .then(m => m.AuthModule)},
  {path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
