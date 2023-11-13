import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FlatModel } from 'src/app/shared/models/flat.model';
import { FlatFormModel } from 'src/app/shared/models/flatForm.model';

@Injectable({
  providedIn: 'root',
})
export class FlatService {
  constructor() {}

  public parseFlatToForm(flatData: FlatModel): FlatFormModel {
    const flatForm = {
      data: new FormGroup({
        information: new FormGroup({
          title: new FormControl(flatData.data.information.title, []),
          description: new FormControl(
            flatData.data.information.description,
            []
          ),
        }),
        location: new FormGroup({
          street: new FormControl(flatData.data.location.street, []),
          address: new FormControl(flatData.data.location.address, []),
          number: new FormControl(flatData.data.location.number, []),
          floor: new FormControl(flatData.data.location.floor, []),
          door: new FormControl(flatData.data.location.door, []),
          block: new FormControl(flatData.data.location.block, []),
          gate: new FormControl(flatData.data.location.gate, []),
          zip: new FormControl(flatData.data.location.zip, []),
          city: new FormControl(flatData.data.location.city, []),
          province: new FormControl(flatData.data.location.province, []),
          state: new FormControl(flatData.data.location.state, []),
          country: new FormControl(flatData.data.location.country, []),
          lng: new FormControl(flatData.data.location.lng, []),
          lat: new FormControl(flatData.data.location.lat, []),
        }),
        specs: new FormGroup({
          m2: new FormControl(flatData.data.specs.m2, []),
          roomsNumber: new FormControl(flatData.data.specs.roomsNumber, []),
          bathroomsNumber: new FormControl(
            flatData.data.specs.bathroomsNumber,
            []
          ),
          deposit: new FormControl(flatData.data.specs.deposit, []),
          depositMonths: new FormControl(flatData.data.specs.depositMonths, []),
        }),
        rating: new FormGroup({
          total: new FormControl(flatData.data.rating.total, []),
          price: new FormControl(flatData.data.rating.price, []),
          clearfull: new FormControl(flatData.data.rating.clearfull, []),
          modern: new FormControl(flatData.data.rating.modern, []),
          amenities: new FormControl(flatData.data.rating.amenities, []),
          publicTransport: new FormControl(
            flatData.data.rating.publicTransport,
            []
          ),
          neighbours: new FormControl(flatData.data.rating.neighbours, []),
          neighbourhood: new FormControl(
            flatData.data.rating.neighbourhood,
            []
          ),
          building: new FormControl(flatData.data.rating.building, []),
          tenantment: new FormControl(flatData.data.rating.tenantment, []),
          realState: new FormControl(flatData.data.rating.realState, []),
          views: new FormControl(flatData.data.rating.views, []),
        }),
        price: new FormGroup({
          firstPrice: new FormGroup({
            date: new FormControl(flatData.data.price.firstPrice.date, []),
            value: new FormControl(flatData.data.price.firstPrice.value, []),
          }),
          currentPrice: new FormGroup({
            date: new FormControl(flatData.data.price.currentPrice.date, []),
            value: new FormControl(flatData.data.price.currentPrice.value, []),
          }),
          averagePrice: new FormControl(flatData.data.price.averagePrice, []),
        }),
        others: new FormGroup({
          buildingYear: new FormControl(flatData.data.others.buildingYear),
          floorsNumber: new FormControl(flatData.data.others.floorsNumber),
          elevator: new FormControl(flatData.data.others.elevator),
          accessibility: new FormControl(flatData.data.others.accessibility),
          furnituresIncluded: new FormControl(
            flatData.data.others.furnituresIncluded
          ),
          contractByRealState: new FormControl(
            flatData.data.others.contractByRealState
          ),
          balcony: new FormControl(flatData.data.others.balcony),
          yard: new FormControl(flatData.data.others.yard),
        }),
      }),
      comments: flatData.comments,
      images: flatData.images,
    };
    return flatForm;
  }
}
