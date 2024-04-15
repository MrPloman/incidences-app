import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { IncidencesListComponent } from './pages/list/incidences-list.component';
import { IncidencesListService } from './services/IncidencesListService.service';
import { IncidencesRouting } from './incidences.routing.module';
import { IncidencesDetailComponent } from './pages/detail/incidences-detail.component';

@NgModule({
  declarations: [IncidencesListComponent, IncidencesDetailComponent],
  exports: [IncidencesListComponent, IncidencesDetailComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSkeletonLoaderModule,
    IncidencesRouting,
  ],
  providers: [IncidencesListService],
})
export class IncidencesModule {}
