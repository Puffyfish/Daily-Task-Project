import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthComponent } from 'src/app/pages/auth/auth.component';

import { MaterialModule } from 'src/app/material.module';


const routes: Routes = [
  {
    // login page
    path: '', component: AuthComponent
  },
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AuthComponent],
  exports: [
    AuthComponent,
    RouterModule
  ]
})
export class AuthModule { }
