import { LocationInterface } from '../interfaces/Location.interface';
import { OthersInterface } from '../interfaces/Others.interface';
import { PricePlaceInterface } from '../interfaces/PricePlace.interface';
import { RatingInterface } from '../interfaces/Rating.interface';
import { SpecificationInterface } from '../interfaces/Specification.interface';
import { InformationInterface } from '../interfaces/Information.interface';
export class FlatModel {
  data: {
    information: InformationInterface;
    location: LocationInterface;
    specs: SpecificationInterface;
    rating: RatingInterface;
    price: PricePlaceInterface;
    others: OthersInterface;
  };
  images: any[];
  comments: any[];
  constructor(
    data: {
      information: InformationInterface;
      location: LocationInterface;
      specs: SpecificationInterface;
      rating: RatingInterface;
      price: PricePlaceInterface;
      others: OthersInterface;
    },
    images: [],
    comments: []
  ) {
    this.data = data;
    this.images = images;
    this.comments = comments;
  }
}
