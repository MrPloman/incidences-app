import { Component } from '@angular/core';

@Component({
  selector: 'page-incidences-list',
  templateUrl: './incidences-list.component.html',
  styleUrls: ['./incidences-list.component.scss'],
})
export class IncidencesListComponent {
  public isLoading = true;
  constructor() {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }
}
