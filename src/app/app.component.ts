import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quot: number[] = [180, 222, 35, 14, 55];
  small = Math.min(...this.quot);
  large = Math.max(...this.quot)
}
