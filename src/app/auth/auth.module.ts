import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IncidencesListService } from '../incidences/services/IncidencesListService.service';
import { AuthRouting } from './auth.routing.module';
import { EffectsModule } from '@ngrx/effects';
import { effectsArray } from '../stores/effects';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  exports: [LoginComponent, RegisterComponent],
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRouting,
    EffectsModule.forFeature(effectsArray),
  ],
  providers: [IncidencesListService],
})
export class AuthModule {}
