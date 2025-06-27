import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>Hello from Angular CI Test</h1>
      <button (click)="increment()">Click Count: {{ count }}</button>
    </div>
  `,
  styles: [`
    .container { text-align: center; margin-top: 50px; }
    button { padding: 10px; font-size: 16px; }
  `]
})
export class AppComponent {
  count = 0;

  increment() {
    this.count++;
  }
}
