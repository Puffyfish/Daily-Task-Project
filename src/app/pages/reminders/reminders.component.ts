import { Component } from '@angular/core';
<<<<<<< Updated upstream
import { ActivatedRoute, Router } from '@angular/router';
=======
>>>>>>> Stashed changes

@Component({
  selector: 'app-reminders',
  templateUrl: './reminders.component.html',
  styleUrls: ['./reminders.component.scss']
})
export class RemindersComponent {


<<<<<<< Updated upstream
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}


  showForm(){
    this.router.navigate(['new'], {relativeTo: this.route})
    // this.newTaskPage = true;
  }
=======

>>>>>>> Stashed changes
}
