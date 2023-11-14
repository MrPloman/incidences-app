import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FlatModel } from '../../models/flat.model';
import { InputModel } from '../../models/input.model';
export let NewFlat: FlatModel = new FlatModel(
  {
    information: {
      title: '',
      description: '',
    },
    location: {
      street: '',
      address: '',
      number: null,
      floor: '',
      door: '',
      block: '',
      gate: '',
      zip: null,
      city: '',
      province: '',
      state: '',
      country: '',
      lng: 0,
      lat: 0,
    },
    specs: {
      m2: null,
      roomsNumber: null,
      bathroomsNumber: null,
      deposit: null,
      depositMonths: null,
    },
    rating: {
      total: 50,
      price: 50,
      clearfull: 50,
      modern: 50,
      amenities: 50,
      publicTransport: 50,
      neighbours: 50,
      neighbourhood: 50,
      building: 50,
      tenantment: 50,
      realState: 50,
      views: 50,
    },
    price: {
      firstPrice: {
        date: new Date(),
        value: null,
      },
      currentPrice: {
        date: new Date(),
        value: null,
      },
      averagePrice: null,
    },
    others: {
      buildingYear: null,
      floorsNumber: null,
      elevator: false,
      accessibility: false,
      furnituresIncluded: false,
      contractByRealState: false,
      balcony: false,
      yard: false,
    },
  },
  [],
  []
);
