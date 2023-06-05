import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { DatePipe } from '@angular/common';
import { AuthService } from 'src/app/services/auth.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  standalone: true,
  imports: [MatButtonModule, DatePipe, MatIconModule],
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  todayNumber: number = Date.now();
  loginUser!: {};

  constructor(
    private authService: AuthService
  ) {

    const currentUser = JSON.parse(localStorage.getItem('userData') || '{}')
    this.loginUser = currentUser.name
  }

  // showForm(){
  //   this.router.navigate(['new'], {relativeTo: this.route})
  // }

  onLogout() {
    this.authService.logout()  }
}
