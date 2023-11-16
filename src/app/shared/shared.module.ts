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
import { MiniLoaderComponent } from './components/mini-loader/mini-loader.component';
import { InputSliderComponent } from './components/inputs/input-slider/input-slider.component';
import { MatSliderModule } from '@angular/material/slider';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { SelectorComponent } from './components/inputs/selector/selector.component';
import { MatSelectModule } from '@angular/material/select';
import { LoadingService } from './services/LoadingService.service';
import { FormService } from './services/FormService.service';
import { InputCheckboxComponent } from './components/inputs/input-checkbox/input-checkbox.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { TextFieldModule } from '@angular/cdk/text-field';
import { InputTextareaComponent } from './components/inputs/input-textarea/input-textarea.component';
import { InputDateComponent } from './components/inputs/input-date/input-date.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
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
    MatSliderModule,
    MatSelectModule,
    MatCheckboxModule,
    TextFieldModule,
    PipesModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
  ],
  declarations: [
    InputTextComponent,
    InputNumberComponent,
    InputCheckboxComponent,
    GenericButtonComponent,
    LoaderComponent,
    FlatFormComponent,
    ProfileFormComponent,
    AuthFormComponent,
    MapComponent,
    NavbarComponent,
    CardComponent,
    MiniLoaderComponent,
    InputSliderComponent,
    SelectorComponent,
    InputTextareaComponent,
    InputDateComponent,
  ],
  exports: [
    InputTextComponent,
    InputNumberComponent,
    GenericButtonComponent,
    InputCheckboxComponent,
    LoaderComponent,
    NgxSkeletonLoaderModule,
    MapComponent,
    NavbarComponent,
    CardComponent,
    MiniLoaderComponent,
    FlatFormComponent,
  ],
  providers: [LoadingService, FormService],
  bootstrap: [],
})
export class SharedModule {}
