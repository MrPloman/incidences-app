import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationsComponent } from './locations.component';
import { LocationsRoutingModule } from './locations.routing.module';
import { SharedModule } from '../shared/shared.module';
import { LocationsService } from './locations.service';

@NgModule({
  declarations: [LocationsComponent],
  imports: [CommonModule, LocationsRoutingModule, SharedModule],
  providers: [LocationsService],
})
export class LocationsModule {}
