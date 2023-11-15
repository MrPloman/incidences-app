import { FormControl, FormGroup } from '@angular/forms';

export class FlatFormModel {
  data: FormGroup<{
    information: FormGroup<{
      title: FormControl<string | null>;
      description: FormControl<string | null>;
    }>;
    location: FormGroup<{
      street: FormControl<string | null>;
      address: FormControl<string | null>;
      number: FormControl<number | null>;
      floor: FormControl<string | null>;
      door: FormControl<string | null>;
      block: FormControl<string | null>;
      gate: FormControl<string | null>;
      zip: FormControl<number | null>;
      city: FormControl<string | null>;
      province: FormControl<string | null>;
      state: FormControl<string | null>;
      country: FormControl<string | null>;
      lng: FormControl<number | null>;
      lat: FormControl<number | null>;
    }>;
    specs: FormGroup<{
      m2: FormControl<number | null>;
      roomsNumber: FormControl<number | null>;
      bathroomsNumber: FormControl<number | null>;
      deposit: FormControl<number | null>;
      depositMonths: FormControl<number | null>;
    }>;
    rating: FormGroup<{
      total: FormControl<number | null>;
      price: FormControl<number | null>;
      clearfull: FormControl<number | null>;
      modern: FormControl<number | null>;
      amenities: FormControl<number | null>;
      publicTransport: FormControl<number | null>;
      neighbours: FormControl<number | null>;
      neighbourhood: FormControl<number | null>;
      building: FormControl<number | null>;
      tenantment: FormControl<number | null>;
      realState: FormControl<number | null>;
      views: FormControl<number | null>;
    }>;
    price: FormGroup<{
      firstPrice: FormGroup<{
        date: FormControl<Date | string | null>;
        value: FormControl<number | null>;
      }>;
      currentPrice: FormGroup<{
        date: FormControl<Date | string | null>;
        value: FormControl<number | null>;
      }>;
      averagePrice: FormControl<number | null>;
    }>;
    others: FormGroup<{
      buildingYear: FormControl<number | null>;
      floorsNumber: FormControl<number | null>;
      elevator: FormControl<boolean | null>;
      accessibility: FormControl<boolean | null>;
      furnituresIncluded: FormControl<boolean | null>;
      contractByRealState: FormControl<boolean | null>;
      balcony: FormControl<boolean | null>;
      yard: FormControl<boolean | null>;
    }>;
  }>;
  constructor(
    data: FormGroup<{
      information: FormGroup<{
        title: FormControl<string | null>;
        description: FormControl<string | null>;
      }>;
      location: FormGroup<{
        street: FormControl<string | null>;
        address: FormControl<string | null>;
        number: FormControl<number | null>;
        floor: FormControl<string | null>;
        door: FormControl<string | null>;
        block: FormControl<string | null>;
        gate: FormControl<string | null>;
        zip: FormControl<number | null>;
        city: FormControl<string | null>;
        province: FormControl<string | null>;
        state: FormControl<string | null>;
        country: FormControl<string | null>;
        lng: FormControl<number | null>;
        lat: FormControl<number | null>;
      }>;
      specs: FormGroup<{
        m2: FormControl<number | null>;
        roomsNumber: FormControl<number | null>;
        bathroomsNumber: FormControl<number | null>;
        deposit: FormControl<number | null>;
        depositMonths: FormControl<number | null>;
      }>;
      rating: FormGroup<{
        total: FormControl<number | null>;
        price: FormControl<number | null>;
        clearfull: FormControl<number | null>;
        modern: FormControl<number | null>;
        amenities: FormControl<number | null>;
        publicTransport: FormControl<number | null>;
        neighbours: FormControl<number | null>;
        neighbourhood: FormControl<number | null>;
        building: FormControl<number | null>;
        tenantment: FormControl<number | null>;
        realState: FormControl<number | null>;
        views: FormControl<number | null>;
      }>;
      price: FormGroup<{
        firstPrice: FormGroup<{
          date: FormControl<Date | string | null>;
          value: FormControl<number | null>;
        }>;
        currentPrice: FormGroup<{
          date: FormControl<Date | string | null>;
          value: FormControl<number | null>;
        }>;
        averagePrice: FormControl<number | null>;
      }>;
      others: FormGroup<{
        buildingYear: FormControl<number | null>;
        floorsNumber: FormControl<number | null>;
        elevator: FormControl<boolean | null>;
        accessibility: FormControl<boolean | null>;
        furnituresIncluded: FormControl<boolean | null>;
        contractByRealState: FormControl<boolean | null>;
        balcony: FormControl<boolean | null>;
        yard: FormControl<boolean | null>;
      }>;
    }>
  ) {
    this.data = data;
  }
}
