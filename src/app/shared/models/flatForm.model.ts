import { FormControl, FormGroup } from '@angular/forms';
import { LocationInterface } from '../interfaces/Location.interface';
import { OthersInterface } from '../interfaces/Others.interface';
import { PricePlaceInterface } from '../interfaces/PricePlace.interface';
import { RatingInterface } from '../interfaces/Rating.interface';
import { SpecificationInterface } from '../interfaces/Specification.interface';
import { InformationInterface } from '../interfaces/Information.interface';
export class FlatFormModel {
  data: FormGroup<{
    information: FormGroup<InformationInterface>;
    location: FormGroup<LocationInterface>;
    specs: FormGroup<SpecificationInterface>;
    rating: FormGroup<RatingInterface>;
    price: FormGroup<PricePlaceInterface>;
    others: FormGroup<OthersInterface>;
  }>;
  images: any[];
  comments: any[];
  constructor(
    data: FormGroup<{
      information: FormGroup<InformationInterface>;
      location: FormGroup<LocationInterface>;
      specs: FormGroup<SpecificationInterface>;
      rating: FormGroup<RatingInterface>;
      price: FormGroup<PricePlaceInterface>;
      others: FormGroup<OthersInterface>;
    }>,
    images: [],
    comments: []
  ) {
    this.data = data;
    this.images = images;
    this.comments = comments;
  }
}
