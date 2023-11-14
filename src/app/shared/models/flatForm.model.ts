import { FormControl, FormGroup } from '@angular/forms';

export class FlatFormModel {
  data: FormGroup<{
    information: FormGroup<{
      title: FormControl<any>;
      description: FormControl<any>;
    }>;
    location: FormGroup<{
      street: FormControl<any>;
      address: FormControl<any>;
      number: FormControl<any>;
      floor: FormControl<any>;
      door: FormControl<any>;
      block: FormControl<any>;
      gate: FormControl<any>;
      zip: FormControl<any>;
      city: FormControl<any>;
      province: FormControl<any>;
      state: FormControl<any>;
      country: FormControl<any>;
      lng: FormControl<any>;
      lat: FormControl<any>;
    }>;
    specs: FormGroup<{
      m2: FormControl<any>;
      roomsNumber: FormControl<any>;
      bathroomsNumber: FormControl<any>;
      deposit: FormControl<any>;
      depositMonths: FormControl<any>;
    }>;
    rating: FormGroup<{
      total: FormControl<number>;
      price: FormControl<number>;
      clearfull: FormControl<number>;
      modern: FormControl<number>;
      amenities: FormControl<number>;
      publicTransport: FormControl<number>;
      neighbours: FormControl<number>;
      neighbourhood: FormControl<number>;
      building: FormControl<number>;
      tenantment: FormControl<number>;
      realState: FormControl<number>;
      views: FormControl<number>;
    }>;
    price: FormGroup<{
      firstPrice: FormGroup<{
        date: FormControl<any>;
        value: FormControl<any>;
      }>;
      currentPrice: FormGroup<{
        date: FormControl<any>;
        value: FormControl<any>;
      }>;
      averagePrice: FormControl<any>;
    }>;
    others: FormGroup<{
      buildingYear: FormControl<any>;
      floorsNumber: FormControl<any>;
      elevator: FormControl<any>;
      accessibility: FormControl<any>;
      furnituresIncluded: FormControl<any>;
      contractByRealState: FormControl<any>;
      balcony: FormControl<any>;
      yard: FormControl<any>;
    }>;
  }>;
  constructor(
    data: FormGroup<{
      information: FormGroup<{
        title: FormControl<any>;
        description: FormControl<any>;
      }>;
      location: FormGroup<{
        street: FormControl<any>;
        address: FormControl<any>;
        number: FormControl<any>;
        floor: FormControl<any>;
        door: FormControl<any>;
        block: FormControl<any>;
        gate: FormControl<any>;
        zip: FormControl<any>;
        city: FormControl<any>;
        province: FormControl<any>;
        state: FormControl<any>;
        country: FormControl<any>;
        lng: FormControl<any>;
        lat: FormControl<any>;
      }>;
      specs: FormGroup<{
        m2: FormControl<any>;
        roomsNumber: FormControl<any>;
        bathroomsNumber: FormControl<any>;
        deposit: FormControl<any>;
        depositMonths: FormControl<any>;
      }>;
      rating: FormGroup<{
        total: FormControl<any>;
        price: FormControl<any>;
        clearfull: FormControl<any>;
        modern: FormControl<any>;
        amenities: FormControl<any>;
        publicTransport: FormControl<any>;
        neighbours: FormControl<any>;
        neighbourhood: FormControl<any>;
        building: FormControl<any>;
        tenantment: FormControl<any>;
        realState: FormControl<any>;
        views: FormControl<any>;
      }>;
      price: FormGroup<{
        firstPrice: FormGroup<{
          date: FormControl<Date>;
          value: FormControl<any>;
        }>;
        currentPrice: FormGroup<{
          date: FormControl<Date>;
          value: FormControl<any>;
        }>;
        averagePrice: FormControl<any>;
      }>;
      others: FormGroup<{
        buildingYear: FormControl<any>;
        floorsNumber: FormControl<any>;
        elevator: FormControl<any>;
        accessibility: FormControl<any>;
        furnituresIncluded: FormControl<any>;
        contractByRealState: FormControl<any>;
        balcony: FormControl<any>;
        yard: FormControl<any>;
      }>;
    }>
  ) {
    this.data = data;
  }
}
