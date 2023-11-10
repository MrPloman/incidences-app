import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FlatFormModel } from '../../models/flatForm.model';
import { InputModel } from '../../models/input.model';
export let NewFlatForm: FlatFormModel = new FlatFormModel(
  new FormGroup({
    location: new FormGroup({
      street: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      number: new FormControl('', [Validators.required]),
      floor: new FormControl('', [Validators.required]),
      door: new FormControl('', [Validators.required]),
      block: new FormControl('', [Validators.required]),
      gate: new FormControl('', [Validators.required]),
      zip: new FormControl(null, [Validators.required]),
      city: new FormControl('', [Validators.required]),
      province: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
      lng: new FormControl('', [Validators.required]),
      lat: new FormControl('', [Validators.required]),
    }),
    specs: new FormGroup({
      m2: new FormControl(null, [Validators.required]),
      roomsNumber: new FormControl(null, [Validators.required]),
      bathroomsNumber: new FormControl(null, [Validators.required]),
      deposit: new FormControl(null, [Validators.required]),
      depositMonths: new FormControl(null, [Validators.required]),
    }),
    rating: new FormGroup({
      total: new FormControl(null, [Validators.required]),
      price: new FormControl(null, [Validators.required]),
      clearfull: new FormControl(null, [Validators.required]),
      modern: new FormControl(null, [Validators.required]),
      amenities: new FormControl(null, [Validators.required]),
      publicTransport: new FormControl(null, [Validators.required]),
      neighbours: new FormControl(null, [Validators.required]),
      neighbourhood: new FormControl(null, [Validators.required]),
      building: new FormControl(null, [Validators.required]),
      tenantment: new FormControl(null, [Validators.required]),
      realState: new FormControl(null, [Validators.required]),
      views: new FormControl(null, [Validators.required]),
    }),
    price: new FormGroup({
      firstPrice: new FormGroup({
        date: new FormControl(new Date(), [Validators.required]),
        value: new FormControl(null, [Validators.required]),
      }),
      currentPrice: new FormGroup({
        date: new FormControl(new Date(), [Validators.required]),
        value: new FormControl(null, [Validators.required]),
      }),
      averagePrice: new FormControl(null, [Validators.required]),
    }),
    others: new FormGroup({
      buildingYear: new FormControl(),
      floorsNumber: new FormControl(),
      elevator: new FormControl(),
      accessibility: new FormControl(),
      furnituresIncluded: new FormControl(),
      contractByRealState: new FormControl(),
      balcony: new FormControl(),
    }),
  }),
  [],
  []
);
