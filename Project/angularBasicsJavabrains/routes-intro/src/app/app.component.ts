import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routes-intro';

  routes = [
    {linkName : 'Home', url: 'home'},
    {linkName : 'Settings', url: 'settings'},
  ]
}
