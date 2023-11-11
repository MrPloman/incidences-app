import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FlatFormModel } from '../../models/flatForm.model';
import { InputModel } from '../../models/input.model';
export let NewFlatForm: FlatFormModel = new FlatFormModel(
  new FormGroup({
    information: new FormGroup({
      title: new FormControl(''),
      description: new FormControl(''),
    }),
    location: new FormGroup({
      street: new FormControl(''),
      address: new FormControl(''),
      number: new FormControl(''),
      floor: new FormControl(''),
      door: new FormControl(''),
      block: new FormControl(''),
      gate: new FormControl(''),
      zip: new FormControl(null),
      city: new FormControl(''),
      province: new FormControl(''),
      state: new FormControl(''),
      country: new FormControl(''),
      lng: new FormControl(''),
      lat: new FormControl(''),
    }),
    specs: new FormGroup({
      m2: new FormControl(null),
      roomsNumber: new FormControl(null),
      bathroomsNumber: new FormControl(null),
      deposit: new FormControl(null),
      depositMonths: new FormControl(null),
    }),
    rating: new FormGroup({
      total: new FormControl(50),
      price: new FormControl(50),
      clearfull: new FormControl(50),
      modern: new FormControl(50),
      amenities: new FormControl(50),
      publicTransport: new FormControl(50),
      neighbours: new FormControl(50),
      neighbourhood: new FormControl(50),
      building: new FormControl(50),
      tenantment: new FormControl(50),
      realState: new FormControl(50),
      views: new FormControl(50),
    }),
    price: new FormGroup({
      firstPrice: new FormGroup({
        date: new FormControl(new Date()),
        value: new FormControl(null),
      }),
      currentPrice: new FormGroup({
        date: new FormControl(new Date()),
        value: new FormControl(null),
      }),
      averagePrice: new FormControl(null),
    }),
    others: new FormGroup({
      buildingYear: new FormControl(null),
      floorsNumber: new FormControl(null),
      elevator: new FormControl(false),
      accessibility: new FormControl(false),
      furnituresIncluded: new FormControl(false),
      contractByRealState: new FormControl(false),
      balcony: new FormControl(false),
      yard: new FormControl(false),
    }),
  }),
  [],
  []
);
