import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RemindersService } from 'src/app/services/reminders.service';

@Component({
  selector: 'app-add-reminder',
  templateUrl: './add-reminder.component.html',
  styleUrls: ['./add-reminder.component.scss']
})
export class AddReminderComponent implements OnInit{
  reminderForm!: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private remindersService: RemindersService) {}

  ngOnInit() {
    // to initialize the form
      this.reminderForm = this._formBuilder.group({
        id: Math.random().toString(8),
        text: ['', Validators.required],
        time: ['', Validators.required],
        isCompleted: false,
      });
    }

// push to the db.json using the taskService
  addNew() {

    if (this.reminderForm.valid) {
      const data = this.reminderForm.value
      this.remindersService.addReminder(data).subscribe({
        next: (res) => {
          console.log('success')
        },
        error: () => {
          alert('New reminder is UNSUCCESSFUL')
        }
      })
    } else {
      alert('Please complete the form')
      return
    }
  }

}
