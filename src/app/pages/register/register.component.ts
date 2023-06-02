import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { MatSnackBar, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent {
  errorMsg: string = "";
  isSubmit: boolean = false;

  // snackbar positioning
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {}

  registerForm= this.fb.group({
    username: this.fb.control('', Validators.required),
    name: this.fb.control('', Validators.required),
    email: this.fb.control('', Validators.compose([Validators.required, Validators.email])),
    password: this.fb.control('', Validators.required)
  })


  toRegister() {
    if(!this.registerForm.valid) {
      return
    }

    const {
      username,
      name,
      email,
      password
    } = this.registerForm.value;

    if (username && name && email && password) {

      const newUser = {
        username,
        name,
        email,
        password
      }

    this.onCreate(newUser);
    this.registerForm.reset();
    }
  }

    onCreate(user: any) {
    this.authService.onRegister(user).subscribe({
      next: (res) => this._snackBar.open("Registration success", "Ok", {
            duration: 3000,
            panelClass: ['snackbar-success']
          }),
      error: (err) => this.errorMsg = err.message,
      complete: () => this.router.navigate(['/login'])
    })


  }
}
