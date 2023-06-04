import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { AuthService } from 'src/app/services/auth.service';
import { UserInterface } from 'src/app/types/user.interface';

@Component({
  standalone: true,
  imports: [MatButtonModule, DatePipe],
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  user!: string;
  todayNumber: number = Date.now();
  loginUser!: {};

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {

    const currentUser = JSON.parse(localStorage.getItem('userData') || '{}')
    this.loginUser = currentUser.name
  }

  // showForm(){
  //   this.router.navigate(['new'], {relativeTo: this.route})
  // }
}
