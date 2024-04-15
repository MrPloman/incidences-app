export class FlatModel {
  data: {
    information: {
      title: string | null;
      description: string | null;
    };
    location: {
      street: string | null;
      address: string | null;
      number: number | null;
      floor: string | null;
      door: string | null;
      block: string | null;
      gate: string | null;
      zip: number | null;
      city: string | null;
      state: string | null;
      country: string | null;
      lng: number | null;
      lat: number | null;
    };
    specs: {
      m2: number | null;
      roomsNumber: number | null;
      bathroomsNumber: number | null;
      deposit: number | null;
      depositMonths: number | null;
    };
    rating: {
      total: number | null;
      price: number | null;
      clearfull: number | null;
      modern: number | null;
      amenities: number | null;
      publicTransport: number | null;
      neighbours: number | null;
      neighbourhood: number | null;
      building: number | null;
      tenantment: number | null;
      realState: number | null;
      views: number | null;
    };
    price: {
      firstPrice: {
        date: Date | string | null;
        value: number | null;
      };
      currentPrice: {
        date: Date | string | null;
        value: number | null;
      };
      averagePrice: number | null;
    };
    others: {
      buildingYear: number | null;
      floorsNumber: number | null;
      elevator: boolean | null;
      accessibility: boolean | null;
      furnituresIncluded: boolean | null;
      contractByRealState: boolean | null;
      balcony: boolean | null;
      yard: boolean | null;
    };
  };
  images: unknown[];
  comments: unknown[];
  constructor(
    data: {
      information: {
        title: string | null;
        description: string | null;
      };
      location: {
        street: string | null;
        address: string | null;
        number: number | null;
        floor: string | null;
        door: string | null;
        block: string | null;
        gate: string | null;
        zip: number | null;
        city: string | null;
        state: string | null;
        country: string | null;
        lng: number | null;
        lat: number | null;
      };
      specs: {
        m2: number | null;
        roomsNumber: number | null;
        bathroomsNumber: number | null;
        deposit: number | null;
        depositMonths: number | null;
      };
      rating: {
        total: number | null;
        price: number | null;
        clearfull: number | null;
        modern: number | null;
        amenities: number | null;
        publicTransport: number | null;
        neighbours: number | null;
        neighbourhood: number | null;
        building: number | null;
        tenantment: number | null;
        realState: number | null;
        views: number | null;
      };
      price: {
        firstPrice: {
          date: Date | string | null;
          value: number | null;
        };
        currentPrice: {
          date: Date | string | null;
          value: number | null;
        };
        averagePrice: number | null;
      };
      others: {
        buildingYear: number | null;
        floorsNumber: number | null;
        elevator: boolean | null;
        accessibility: boolean | null;
        furnituresIncluded: boolean | null;
        contractByRealState: boolean | null;
        balcony: boolean | null;
        yard: boolean | null;
      };
    },
    images: unknown[],
    comments: unknown[]
  ) {
    this.data = data;
    this.comments = comments;
    this.images = images;
  }
}
