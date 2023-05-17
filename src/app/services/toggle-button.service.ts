import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToggleButtonService {
  // service is created so it can be observed by header and the task-form component

  private toggleButton: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  toggleAddTask(): void {
    this.toggleButton = !this.toggleButton;
    this.subject.next(this.toggleButton) // to make the value of toggleButton an observable
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
