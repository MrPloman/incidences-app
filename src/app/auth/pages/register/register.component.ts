import { Component } from '@angular/core';

@Component({
  selector: 'page-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
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
