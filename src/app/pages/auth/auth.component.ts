import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {
  MatSnackBar,
  // MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition
} from '@angular/material/snack-bar';
import { User } from 'src/app/types/User.model';
import { map } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})

export class AuthComponent implements OnInit {
  public loginForm!: FormGroup; //verified
  errorMsg: string = "";
  isSubmit: boolean = false;
  user!: User;

  // horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  get usernameField() {
    return this.loginForm.get('username');
  }

  get passwordField() {
    return this.loginForm.get('password');
  }

  constructor(
    private _fb: FormBuilder,
    private _authService: AuthService,
    private _router: Router,
    private _snackbar: MatSnackBar
  ) { }

  ngOnInit() {
    this.loginForm = this._fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]

    });

  }

  onSubmit() {
    this.loginForm.markAllAsTouched();
    if (this.loginForm.invalid) {
      return;
    }

    this.errorMsg = "";
    this.isSubmit = true;
    const { username } = this.loginForm.value;
    this._authService.findByUsername(username).subscribe(
      (user) => {
        this.user = user
        const { password } = this.loginForm.value;
         if (this.user.password !== password) {
          return alert('Incorrect logins') 
        }
        this._authService.storeUser(this.user)
        this.loginForm.reset();
        this._router.navigate(['todos'])
      }
    )
  }

}
