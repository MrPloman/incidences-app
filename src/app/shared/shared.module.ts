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
import { StoreModule } from '@ngrx/store';
import { reducers } from './stores';
import { loadingReducer } from './stores/loading/loading.reducer';
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
    StoreModule.forFeature('loading', loadingReducer),
  ],
  declarations: [
    InputTextComponent,
    InputNumberComponent,
    GenericButtonComponent,
    LoaderComponent,
  ],
  exports: [
    InputTextComponent,
    InputNumberComponent,
    GenericButtonComponent,
    LoaderComponent,
    NgxSkeletonLoaderModule,
  ],
  bootstrap: [],
})
export class SharedModule {}
