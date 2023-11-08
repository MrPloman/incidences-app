import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InputTextComponent } from './components/inputs/input-text/input-text.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { InputNumberComponent } from './components/inputs/input-number/input-number.component';
import { GenericButtonComponent } from './components/buttons/generic-button/generic-button.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { LoaderComponent } from './components/loader/loader.component';
import { FlatFormComponent } from './components/forms/flat-form/flat-form.component';
import { ProfileFormComponent } from './components/forms/profile-form/profile-form.component';
import { AuthFormComponent } from './components/forms/auth-form/auth-form.component';
import { MapComponent } from './components/map/map.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardComponent } from './components/card/card.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    NgxSkeletonLoaderModule,
    HttpClientModule,
  ],
  declarations: [
    InputTextComponent,
    InputNumberComponent,
    GenericButtonComponent,
    LoaderComponent,
    FlatFormComponent,
    ProfileFormComponent,
    AuthFormComponent,
    MapComponent,
    NavbarComponent,
    CardComponent,
  ],
  exports: [
    InputTextComponent,
    InputNumberComponent,
    GenericButtonComponent,
    LoaderComponent,
    NgxSkeletonLoaderModule,
    MapComponent,
    NavbarComponent,
    CardComponent,
  ],
  bootstrap: [],
})
export class SharedModule {}
