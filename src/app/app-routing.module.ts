import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/pages/login/login.component';
import { RegisterComponent } from './auth/pages/register/register.component';
import { IncidencesListComponent } from './incidences/pages/list/incidences-list.component';
import { AuthModule } from './auth/auth.module';

const routes: Routes = [
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
    path: 'locations',
    loadChildren: () =>
      import('./locations/locations.module').then((m) => m.LocationsModule),
  },
  {
    path: '',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
