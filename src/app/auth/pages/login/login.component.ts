import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoadingService } from 'src/app/shared/services/LoadingService.service';

@Component({
  selector: 'app-page-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public title = 'Login';
  public email = '';
  public password = '';
  public submitIsForbidden = true;
  public isDownloading = false;
  public success = false;
  public router = inject(Router);
  private LoadingService = inject(LoadingService);

  public readonly loginForm: FormGroup = new FormGroup({
    email: new FormControl(this.email, [
      Validators.required,
      Validators.pattern(/^[A-Za-z0-9_!#$%&'*+/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/),
    ]),
    password: new FormControl(this.password, [
      Validators.required,
      Validators.pattern(
        '(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=[^0-9]*[0-9]).{8,}'
      ),
    ]),
  });

  constructor() {
    this.loginForm.valueChanges.subscribe(() => {
      if (this.validateForm()) {
        this.submitIsForbidden = false;
      } else this.submitIsForbidden = true;
    });
  }
  public submit() {
    if (!this.submitIsForbidden && !this.isDownloading) {
      this.LoadingService.setTrue();
      this.isDownloading = true;
      setTimeout(() => {
        this.isDownloading = false;
        this.success = true;
        setTimeout(() => {
          this.router.navigate(['incidences'], {});
          this.LoadingService.setFalse();
        }, 2000);
      }, 4000);
    }
  }
  private validateForm() {
    if (this.loginForm.status === 'VALID') return true;
    else return false;
  }
  ngOnInit(): void {
    this.LoadingService.setFalse();
  }
}
