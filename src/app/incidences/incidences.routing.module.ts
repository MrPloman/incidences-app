import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncidencesListComponent } from './pages/list/incidences-list.component';
import { IncidencesDetailComponent } from './pages/detail/incidences-detail.component';

const incidencesRoutes: Routes = [
  {
    path: 'list',
    component: IncidencesListComponent,
  },
  {
    path: ':id',
    component: IncidencesDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(incidencesRoutes)],
  exports: [RouterModule],
})
export class IncidencesRouting {}
