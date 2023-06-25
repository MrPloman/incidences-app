import { Component, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'page-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public title: string = 'Login';
  public email: string = '';
  public password: string = '';
  public submitIsForbidden: boolean = true;
  public isDownloading: boolean = false;
  private router: Router;

  public readonly loginForm: FormGroup = new FormGroup({
    email: new FormControl(this.email, [
      Validators.required,
      Validators.pattern(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/),
    ]),
    password: new FormControl(this.password, [
      Validators.required,
      Validators.pattern(
        '(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=[^0-9]*[0-9]).{8,}'
      ),
    ]),
  });

  constructor(router: Router) {
    this.router = router;
    this.loginForm.valueChanges.subscribe((val) => {
      if (this.validateForm()) {
        this.submitIsForbidden = false;
      } else this.submitIsForbidden = true;
    });
  }
  public submit() {
    if (!this.submitIsForbidden && !this.isDownloading) {
      this.isDownloading = true;
      setTimeout(() => {
        this.isDownloading = false;
        this.router.navigateByUrl('/register');
      }, 4000);

      console.log('YEEEE');
    }
  }
  private validateForm() {
    if (this.loginForm.status === 'VALID') return true;
    else return false;
  }
  ngOnInit(): void {}
}
