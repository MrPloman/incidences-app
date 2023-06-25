import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { SharedModule } from '../shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  exports: [LoginComponent],
  imports: [
    CommonModule,
    SharedModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class AuthModule {}
