import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { LoadingService } from 'src/app/shared/services/LoadingService.service';
import { AppState } from 'src/app/stores/app.state';

@Component({
  selector: 'app-page-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public title = 'Login';
  public email = '';
  public password = '';
  public submitIsForbidden = true;
  public isDownloading = false;
  public success = false;
  private router: Router;
  private loadingService: LoadingService;

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

  constructor(
    router: Router,
    public LoadingService: LoadingService,
    private store: Store<AppState>
  ) {
    this.loadingService = LoadingService;
    this.router = router;
    this.loginForm.valueChanges.subscribe(() => {
      if (this.validateForm()) {
        this.submitIsForbidden = false;
      } else this.submitIsForbidden = true;
    });
  }
  public submit() {
    if (!this.submitIsForbidden && !this.isDownloading) {
      this.loadingService.setTrue();
      this.isDownloading = true;
      setTimeout(() => {
        this.isDownloading = false;
        this.success = true;
        setTimeout(() => {
          this.router.navigate(['incidences'], {});
          this.loadingService.setFalse();
        }, 2000);
      }, 4000);
    }
  }
  private validateForm() {
    if (this.loginForm.status === 'VALID') return true;
    else return false;
  }
  ngOnInit(): void {
    this.loadingService.setFalse();
  }
}
