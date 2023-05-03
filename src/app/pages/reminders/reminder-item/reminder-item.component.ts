import { Component, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { ReminderInterface } from 'src/app/types/reminder.interface';
import { RemindersService } from 'src/app/services/reminders.service';

@Component({
  selector: 'app-reminder-item',
  templateUrl: './reminder-item.component.html',
  styleUrls: ['./reminder-item.component.scss']
})

export class ReminderItemComponent {
  reminders: Observable<ReminderInterface[]>;

  @Output() checkClicked = new EventEmitter();
  constructor(
    private remindersService: RemindersService
    ) {
      this.reminders = this.remindersService.getReminders()
      // to get the default values so it wont be undefinid initially
      // benefit: no subscription meaning no need to unsubscribe ==> LEANER CODE
      // through this, we dont need ngOnInit and onDestory
    }


  onClick() {
    console.log('this check is clicked.');
    this.checkClicked.emit();
  }

  onDelete(data: ReminderInterface) {
    console.log('deleteReminder:', data)
    this.remindersService.deleteReminder(data).subscribe({
      next: (res) => {
        alert('Successfully deleted ' + data.text)
      },
      error: (err) => {
        alert(err);
      }
    })
  }
}
