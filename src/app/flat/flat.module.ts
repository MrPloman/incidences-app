import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateFlatComponent } from './pages/create/create.component';
import { UpdateFlatComponent } from './pages/update/update.component';
import { ShowFlatComponent } from './pages/show/show.component';
import { FlatRoutingModule } from './flat.routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { effectsArray } from '../stores/effects';
@NgModule({
  declarations: [CreateFlatComponent, UpdateFlatComponent, ShowFlatComponent],
  imports: [
    CommonModule,
    FlatRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,

    EffectsModule.forFeature(effectsArray),
  ],
  exports: [],
})
export class FlatModule {}
