import { Component, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'incidences-app';
  get cosa() {
    return this.title;
  }

  public lol = () => {
    console.log(this.title);
  };
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.title);
  }
}
