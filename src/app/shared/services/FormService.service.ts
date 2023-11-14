import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { allActions } from 'src/app/stores/actions';
import { RatingInterface } from '../interfaces/Rating.interface';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  constructor(private store: Store<{ status: boolean }>) {}
  public isInputText(form: string, label: string): boolean {
    if (form === 'flat') {
      if (
        label === 'title' ||
        label === 'address' ||
        label === 'floor' ||
        label === 'door' ||
        label === 'block' ||
        label === 'gate' ||
        label === 'city'
      )
        return true;
      else return false;
    } else return false;
  }
  public isInputTextarea(form: string, label: string): boolean {
    if (form === 'flat') {
      if (label === 'description') return true;
      else return false;
    } else return false;
  }
  public isInputNumber(form: string, label: string): boolean {
    if (form === 'flat') {
      if (
        label === 'number' ||
        label === 'zip' ||
        label === 'lng' ||
        label === 'lat' ||
        label === 'm2' ||
        label === 'roomsNumber' ||
        label === 'bathroomsNumber' ||
        label === 'deposit' ||
        label === 'depositMonths' ||
        label === 'buildingYear' ||
        label === 'floorsNumber'
      )
        return true;
      else return false;
    } else return false;
  }
  public isInputCheckbox(form: string, label: string): boolean {
    if (form === 'flat') {
      if (
        label === 'elevator' ||
        label === 'accessibility' ||
        label === 'furnituresIncluded' ||
        label === 'contractByRealState' ||
        label === 'balcony' ||
        label === 'yard'
      )
        return true;
      else return false;
    } else return false;
  }
  public isInputSelector(form: string, label: string): boolean {
    if (form === 'flat') {
      if (
        label === 'street' ||
        label === 'province' ||
        label === 'state' ||
        label === 'country'
      )
        return true;
      else return false;
    } else return false;
  }
  public isInputRequired(form: string, label: string): boolean {
    if (form === 'flat') {
      if (
        label === 'title' ||
        label === 'description' ||
        label === 'street' ||
        label === 'country' ||
        label === 'number' ||
        label === 'address' ||
        label === 'city' ||
        label === 'zip' ||
        label === 'city'
      )
        return true;
      else return false;
    } else return false;
  }

  public calculateTotalRating(
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
    }>
  ): number {
    let count = 0;
    Object.keys(rating.controls).forEach((input) => {
      if (input !== 'total' && rating.get(input) && rating.get(input)) {
        count += rating.get(input)?.value;
      }
    });
    return count / (Object.keys(rating.controls).length - 1);
    // Object.keys(rating).reduce((accumulator, currentValue) => {
    //   console.log(accumulator, currentValue)
    // }, 0);
  }
}
