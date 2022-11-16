import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blog-frog-14';

  name = 'Peter';
  sliderValue = 0;

  list = ['apple', 'banana', 'grape'];

  setName(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    console.log(value);
    this.name = (value);
  }
}
