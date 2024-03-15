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
        label === 'floorsNumber' ||
        label === 'averagePrice' ||
        label === 'value'
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
      if (label === 'street' || label === 'state' || label === 'country')
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
        label === 'date' ||
        label === 'value'
      )
        return true;
      else return false;
    } else return false;
  }
  public isInputDate(form: string, label: string): boolean {
    if (form === 'flat') {
      if (label === 'date') return true;
      else return false;
    } else return false;
  }

  public calculateTotalRating(rating: any): number {
    let count = 0;
    Object.keys(rating).forEach((input) => {
      if (input !== 'total' && rating[input]) {
        if (rating && rating[input] && !isNaN(rating[input]))
          count += rating[input];
      }
    });
    console.log(Math.round(count / Object.keys(rating).length));
    return Math.round(count / Object.keys(rating).length);
  }
}
