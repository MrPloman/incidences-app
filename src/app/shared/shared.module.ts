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

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
  declarations: [
    InputTextComponent,
    InputNumberComponent,
    GenericButtonComponent,
  ],
  exports: [InputTextComponent, InputNumberComponent, GenericButtonComponent],
  bootstrap: [],
})
export class SharedModule {}
