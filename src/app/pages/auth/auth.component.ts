import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})

export class AuthComponent implements OnInit{
  public loginForm!: FormGroup; //verified
  errorMsg: string = "";
  isSubmit: boolean = false;

  get emailField() {
    return this.loginForm.get('email');
  }

  get passwordField() {
    return this.loginForm.get('password');
  }

  constructor(
    private _fb: FormBuilder,
    private _authService: AuthService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.loginForm = this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]

    });

  }

  onSubmit(){
    this.loginForm.markAllAsTouched();
    if (this.loginForm.invalid) {
      return;
    }

    this.errorMsg = "";
    this.isSubmit = true;
    const data = this.loginForm.value;

    if (data) {
      try {
        // get all the users first
        this._authService.getUsers()
          .subscribe(res => {

        // find the matching user
            const user = res.find((a:any) => {
              return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
            })

        // if the user is found
            if (user) {
              alert('login success');
              this.loginForm.reset();
              this._router.navigate(['todos'])
            } else {

        // if the user was not found
              alert('user not found')
            }
          })

        // this._snackBar.open("Login success", "Ok", {
        //   duration: 3000,
        //   panelClass: ['snackbar-success']
        // });

      } catch (err: any) {
        this.isSubmit = false;
        this.errorMsg = err?.status == 401 ? 'Invalid login' : err.message;
      }
    }
  }

}
