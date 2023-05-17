import { Component } from '@angular/core';
<<<<<<< Updated upstream
=======
import { AuthService } from 'src/app/services/auth.service';
>>>>>>> Stashed changes

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

<<<<<<< Updated upstream
=======
  constructor(
    private authService: AuthService
  ) {}

  onLogout() {
    this.authService.logout();
  }
>>>>>>> Stashed changes
}
