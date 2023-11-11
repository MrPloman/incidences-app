import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormPipe } from './form.pipe';

@NgModule({
  declarations: [FormPipe],
  imports: [CommonModule],
  exports: [FormPipe],
  providers: [],
})
export class PipesModule {}
