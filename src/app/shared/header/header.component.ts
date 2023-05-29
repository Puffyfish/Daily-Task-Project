import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  standalone: true,
  imports: [MatButtonModule, DatePipe],
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  user!: string;
  // datePipeString: string | null;
  todayNumber: number = Date.now();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private datePipe: DatePipe
  ) {
      // this.datePipeString = this.datePipe.transform(Date.now(),'yyyy-MM-dd');
      // console.log(this.datePipeString);

    // const loginUser = localStorage.getItem('userData');
    // this.user = loginUser.name
  }

  showForm(){
    this.router.navigate(['new'], {relativeTo: this.route})
    // this.newTaskPage = true;
  }
}
