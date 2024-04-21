import { Component } from '@angular/core';

@Component({
  selector: 'app-page-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  public isLoading = true;
  public list = [];
}
