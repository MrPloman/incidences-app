import { FormControl, FormGroup } from '@angular/forms';
import { CommentInterface } from '../interfaces/Comment.interface';
import { LocationInterface } from '../interfaces/Location.interface';
import { OthersInterface } from '../interfaces/Others.interface';
import { PricePlaceInterface } from '../interfaces/PricePlace.interface';
import { RatingInterface } from '../interfaces/Rating.interface';
import { SpecificationInterface } from '../interfaces/Specification.interface';

export class FlatFormModel {
  data: FormGroup<{
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
