export class FlatMarker {
  constructor(
    public lat: number,
    public lng: number,
    public information?: {
      title: string;
      address: string;
      description: string;
      rating: number;
      interactions: number;
      user: {
        username: string;
        avatar: string;
      };
    }
  ) {}
}
