import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';

import { RemindersComponent } from './reminders.component';
import { HeaderComponent } from 'src/app/shared/header/header.component';
import { AddReminderComponent } from './add-reminder/add-reminder.component';
import { ReminderItemComponent } from './reminder-item/reminder-item.component';

const routes: Routes = [
  {
    path: '', component: RemindersComponent, children: [
      {path: '', component: ReminderItemComponent},
      {path: 'new', component: AddReminderComponent}
    ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    HeaderComponent,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    RemindersComponent,
    ReminderItemComponent,
    AddReminderComponent],
  exports: [
    RemindersComponent,
    ReminderItemComponent,
    AddReminderComponent,
    RouterModule
  ]
})
export class RemindersModule { }
