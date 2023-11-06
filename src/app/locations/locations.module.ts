import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationsComponent } from './locations.component';
import { LocationsRoutingModule } from './locations.routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [LocationsComponent],
  imports: [CommonModule, LocationsRoutingModule, SharedModule],
})
export class LocationsModule {}
