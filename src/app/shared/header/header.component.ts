import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  standalone: true,
  imports: [MatButtonModule],
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  user!: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
    // const loginUser = localStorage.getItem('userData');
    // this.user = loginUser.name
  }

  showForm(){
    this.router.navigate(['new'], {relativeTo: this.route})
    // this.newTaskPage = true;
  }
}
