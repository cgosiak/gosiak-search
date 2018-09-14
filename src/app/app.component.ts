import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  query: string = null;

  enter() {
    if (this.query) {
      window.open(`http://lmgtfy.com/?q=${this.query.split(' ').join('+')}`, '_self');
    }
  }

}
