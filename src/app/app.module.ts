import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavComponent } from './shared/nav/nav.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ButtonComponent } from './shared/button/button.component';
<<<<<<< Updated upstream
=======
import { RegisterComponent } from './pages/register/register.component';
>>>>>>> Stashed changes

import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatToolbarModule} from '@angular/material/toolbar'; //nav c
import { MaterialModule } from './material.module';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
<<<<<<< Updated upstream
    ButtonComponent
=======
    ButtonComponent,
    RegisterComponent
>>>>>>> Stashed changes
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatCheckboxModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
