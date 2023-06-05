import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todos-project';
  isTodosPage:boolean = false;

  constructor(
    private router: Router
  ) {
    if (this.router.url === '/todos') {
      console.log('todos page', this.router.url)
      this.isTodosPage = true
    } else {
      console.log('not todos page', this.router.url)
      this.isTodosPage = false
    }
  }

  getRoute(): string {
    if (this.router.url !== '/todos') {
      return 'wavy-background';
    }
    return '';
  }
  
}
