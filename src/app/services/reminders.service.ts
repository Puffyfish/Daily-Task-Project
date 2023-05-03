import { Injectable } from '@angular/core';
import { ReminderInterface } from '../types/reminder.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// pass in httpOptions if submitting data
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable ({
  providedIn: 'root'
})

export class RemindersService {
  private localApi = 'http://localhost:3000/reminders/';

  constructor(private http: HttpClient) {}

  getReminders(): Observable<ReminderInterface[]> {
    return this.http.get<ReminderInterface[]>(this.localApi);
  }

  addReminder(data: any){
    return this.http.post<any>("http://localhost:3000/reminders", data, httpOptions);
  }

  udpateReminder(data:ReminderInterface): Observable<ReminderInterface> {
      // console.log(this.localApi + id);
      return this.http.put<ReminderInterface>(this.localApi + data.id, data);
    }

  udpateProgress(data:ReminderInterface): Observable<ReminderInterface> {
      // console.log(this.localApi + id);
      data.isCompleted = false;
      return this.http.put<ReminderInterface>(this.localApi + data.id, data);
    }

  // to archive tasks

  // to delete tasks
  deleteReminder(data: ReminderInterface): Observable<ReminderInterface> {
    const url = `${this.localApi}${data.id}`;
    return this.http.delete<ReminderInterface>(url);
  }

}
