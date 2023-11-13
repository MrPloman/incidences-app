import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CreateFlatComponent } from './pages/create/create.component';
import { UpdateFlatComponent } from './pages/update/update.component';
import { ShowFlatComponent } from './pages/show/show.component';

const routes: Routes = [
  { path: 'create/:lat/:lng', component: CreateFlatComponent },
  { path: ':id', component: ShowFlatComponent },
  { path: 'update/:id', component: UpdateFlatComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlatRoutingModule {}
