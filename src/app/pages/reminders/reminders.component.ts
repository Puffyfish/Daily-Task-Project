import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reminders',
  templateUrl: './reminders.component.html',
  styleUrls: ['./reminders.component.scss']
})
export class RemindersComponent {


  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}


  showForm(){
    this.router.navigate(['new'], {relativeTo: this.route})
    // this.newTaskPage = true;
  }
}
