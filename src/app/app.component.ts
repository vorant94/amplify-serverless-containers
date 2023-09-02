import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  onFileSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    console.log(file);
  }
}
