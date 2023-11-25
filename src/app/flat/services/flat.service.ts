import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { NewFlat } from 'src/app/shared/configs/empty_models/NewFlat';
import { FlatModel } from 'src/app/shared/models/flat.model';
import { FlatFormModel } from 'src/app/shared/models/flatForm.model';

@Injectable({
  providedIn: 'root',
})
export class FlatService {
  public newFlatCopy = NewFlat;
  constructor() {}

  public createNewFlat(latLng: { lng: number; lat: number }) {
    let flat: Observable<FlatModel> = new Observable((subs) => {
      subs.next(
        new FlatModel(
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
              country: '',
              state: '',
              lng: latLng.lng,
              lat: latLng.lat,
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
                date: null,
                value: null,
              },
              currentPrice: {
                date: null,
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
        )
      );
      subs.complete();
    });
    return flat;
  }

  public parseFlatToForm(flatData: FlatModel): FlatFormModel {
    const flatForm = {
      data: new FormGroup({
        information: new FormGroup({
          title: new FormControl<string | null>(
            flatData.data.information.title,
            [Validators.required]
          ),
          description: new FormControl<string | null>(
            flatData.data.information.description,
            [Validators.required]
          ),
        }),
        location: new FormGroup({
          street: new FormControl<string | null>(
            flatData.data.location.street,
            [Validators.required]
          ),
          address: new FormControl<string | null>(
            flatData.data.location.address,
            [Validators.required]
          ),
          number: new FormControl<number | null>(
            flatData.data.location.number,
            [Validators.required]
          ),
          floor: new FormControl<string | null>(
            flatData.data.location.floor,
            []
          ),
          door: new FormControl<string | null>(flatData.data.location.door, []),
          block: new FormControl<string | null>(
            flatData.data.location.block,
            []
          ),
          gate: new FormControl<string | null>(flatData.data.location.gate, []),
          zip: new FormControl<number | null>(flatData.data.location.zip, [
            Validators.required,
          ]),
          city: new FormControl<string | null>(flatData.data.location.city, [
            Validators.required,
          ]),
          country: new FormControl<string | null>(
            flatData.data.location.country,
            [Validators.required]
          ),
          state: new FormControl<string | null>(
            flatData.data.location.state,
            []
          ),

          lng: new FormControl<number | null>(flatData.data.location.lng, [
            Validators.required,
          ]),
          lat: new FormControl<number | null>(flatData.data.location.lat, [
            Validators.required,
          ]),
        }),
        specs: new FormGroup({
          m2: new FormControl<number | null>(flatData.data.specs.m2, []),
          roomsNumber: new FormControl<number | null>(
            flatData.data.specs.roomsNumber,
            []
          ),
          bathroomsNumber: new FormControl<number | null>(
            flatData.data.specs.bathroomsNumber,
            []
          ),
          deposit: new FormControl<number | null>(
            flatData.data.specs.deposit,
            []
          ),
          depositMonths: new FormControl<number | null>(
            flatData.data.specs.depositMonths,
            []
          ),
        }),
        rating: new FormGroup({
          total: new FormControl<number | null>(flatData.data.rating.total, [
            Validators.required,
          ]),
          price: new FormControl<number | null>(flatData.data.rating.price, [
            Validators.required,
          ]),
          clearfull: new FormControl<number | null>(
            flatData.data.rating.clearfull,
            [Validators.required]
          ),
          modern: new FormControl<number | null>(flatData.data.rating.modern, [
            Validators.required,
          ]),
          amenities: new FormControl<number | null>(
            flatData.data.rating.amenities,
            [Validators.required]
          ),
          publicTransport: new FormControl<number | null>(
            flatData.data.rating.publicTransport,
            [Validators.required]
          ),
          neighbours: new FormControl<number | null>(
            flatData.data.rating.neighbours,
            [Validators.required]
          ),
          neighbourhood: new FormControl<number | null>(
            flatData.data.rating.neighbourhood,
            [Validators.required]
          ),
          building: new FormControl<number | null>(
            flatData.data.rating.building,
            [Validators.required]
          ),
          tenantment: new FormControl<number | null>(
            flatData.data.rating.tenantment,
            [Validators.required]
          ),
          realState: new FormControl<number | null>(
            flatData.data.rating.realState,
            [Validators.required]
          ),
          views: new FormControl<number | null>(flatData.data.rating.views, [
            Validators.required,
          ]),
        }),
        price: new FormGroup({
          firstPrice: new FormGroup({
            date: new FormControl<any>(flatData.data.price.firstPrice.date, [
              Validators.required,
            ]),
            value: new FormControl<number | null>(
              flatData.data.price.firstPrice.value,
              [Validators.required]
            ),
          }),
          currentPrice: new FormGroup({
            date: new FormControl<any>(flatData.data.price.currentPrice.date, [
              Validators.required,
            ]),
            value: new FormControl<number | null>(
              flatData.data.price.currentPrice.value,
              [Validators.required]
            ),
          }),
          averagePrice: new FormControl<number | null>(
            flatData.data.price.averagePrice,
            [Validators.required]
          ),
        }),
        others: new FormGroup({
          buildingYear: new FormControl<number | null>(
            flatData.data.others.buildingYear
          ),
          floorsNumber: new FormControl<number | null>(
            flatData.data.others.floorsNumber
          ),
          elevator: new FormControl<boolean | null>(
            flatData.data.others.elevator
          ),
          accessibility: new FormControl<boolean | null>(
            flatData.data.others.accessibility
          ),
          furnituresIncluded: new FormControl<boolean | null>(
            flatData.data.others.furnituresIncluded
          ),
          contractByRealState: new FormControl<boolean | null>(
            flatData.data.others.contractByRealState
          ),
          balcony: new FormControl<boolean | null>(
            flatData.data.others.balcony
          ),
          yard: new FormControl<boolean | null>(flatData.data.others.yard),
        }),
      }),
      comments: flatData.comments,
      images: flatData.images,
    };
    return flatForm;
  }
  public getFlat(id: string): Observable<FlatModel> {
    let flat: Observable<FlatModel> = new Observable((subs) => {
      subs.next(
        new FlatModel(
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
              country: '',
              state: '',
              lng: 123,
              lat: 13123,
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
                date: null,
                value: null,
              },
              currentPrice: {
                date: null,
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
        )
      );
      subs.complete();
    });

    return flat;
  }
}
