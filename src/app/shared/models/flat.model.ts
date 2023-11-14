import { LocationInterface } from '../interfaces/Location.interface';
import { OthersInterface } from '../interfaces/Others.interface';
import { PricePlaceInterface } from '../interfaces/PricePlace.interface';
import { RatingInterface } from '../interfaces/Rating.interface';
import { SpecificationInterface } from '../interfaces/Specification.interface';
import { InformationInterface } from '../interfaces/Information.interface';
export class FlatModel {
  data: {
    information: {
      title: any;
      description: any;
    };
    location: {
      street: any;
      address: any;
      number: any;
      floor: any;
      door: any;
      block: any;
      gate: any;
      zip: any;
      city: any;
      province: any;
      state: any;
      country: any;
      lng: any;
      lat: any;
    };
    specs: {
      m2: any;
      roomsNumber: any;
      bathroomsNumber: any;
      deposit: any;
      depositMonths: any;
    };
    rating: {
      total: any;
      price: any;
      clearfull: any;
      modern: any;
      amenities: any;
      publicTransport: any;
      neighbours: any;
      neighbourhood: any;
      building: any;
      tenantment: any;
      realState: any;
      views: any;
    };
    price: {
      firstPrice: {
        date: any;
        value: any;
      };
      currentPrice: {
        date: any;
        value: any;
      };
      averagePrice: any;
    };
    others: {
      buildingYear: any;
      floorsNumber: any;
      elevator: any;
      accessibility: any;
      furnituresIncluded: any;
      contractByRealState: any;
      balcony: any;
      yard: any;
    };
  };
  images: any[];
  comments: any[];
  constructor(
    data: {
      information: {
        title: any;
        description: any;
      };
      location: {
        street: any;
        address: any;
        number: any;
        floor: any;
        door: any;
        block: any;
        gate: any;
        zip: any;
        city: any;
        province: any;
        state: any;
        country: any;
        lng: any;
        lat: any;
      };
      specs: {
        m2: any;
        roomsNumber: any;
        bathroomsNumber: any;
        deposit: any;
        depositMonths: any;
      };
      rating: {
        total: any;
        price: any;
        clearfull: any;
        modern: any;
        amenities: any;
        publicTransport: any;
        neighbours: any;
        neighbourhood: any;
        building: any;
        tenantment: any;
        realState: any;
        views: any;
      };
      price: {
        firstPrice: {
          date: Date;
          value: any;
        };
        currentPrice: {
          date: Date;
          value: any;
        };
        averagePrice: any;
      };
      others: {
        buildingYear: any;
        floorsNumber: any;
        elevator: any;
        accessibility: any;
        furnituresIncluded: any;
        contractByRealState: any;
        balcony: any;
        yard: any;
      };
    },
    images: any[],
    comments: any[]
  ) {
    this.data = data;
    this.comments = comments;
    this.images = images;
  }
}
