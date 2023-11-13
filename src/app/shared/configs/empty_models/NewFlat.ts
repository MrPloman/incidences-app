import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FlatModel } from '../../models/flat.model';
import { InputModel } from '../../models/input.model';
export let NewFlat: FlatModel = {
  data: {
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
      lng: null,
      lat: null,
    },
    specs: {
      m2: null,
      roomsNumber: null,
      bathroomsNumber: null,
      deposit: null,
      depositMonths: null,
    },
    rating: {
      total: null,
      price: null,
      clearfull: null,
      modern: null,
      amenities: null,
      publicTransport: null,
      neighbours: null,
      neighbourhood: null,
      building: null,
      tenantment: null,
      realState: null,
      views: null,
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
  comments: [],
  images: [],
};
