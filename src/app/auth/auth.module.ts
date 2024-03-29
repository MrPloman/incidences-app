import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { SharedModule } from '../shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IncidencesListService } from '../incidences/services/IncidencesListService.service';
import { AuthRouting } from './auth.routing.module';
import { StoreModule } from '@ngrx/store';
import { AppReducers } from '../stores/app.reducer';
import { EffectsModule } from '@ngrx/effects';
import { effectsArray } from '../stores/effects';

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  exports: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRouting,
    EffectsModule.forFeature(effectsArray),
  ],
  providers: [IncidencesListService],
})
export class AuthModule {}
