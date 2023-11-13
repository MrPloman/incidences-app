import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./locations/locations.module').then((m) => m.LocationsModule),
  },
  {
    path: 'locations',
    loadChildren: () =>
      import('./locations/locations.module').then((m) => m.LocationsModule),
  },
  {
    path: 'flat',
    loadChildren: () => import('./flat/flat.module').then((m) => m.FlatModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'incidences',
    loadChildren: () =>
      import('./incidences/incidences.module').then((m) => m.IncidencesModule),
  },
  {
    path: '*',
    loadChildren: () =>
      import('./locations/locations.module').then((m) => m.LocationsModule),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./locations/locations.module').then((m) => m.LocationsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
