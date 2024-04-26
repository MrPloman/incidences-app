export class FlatMarker {
  constructor(
    public lat: number | null,
    public lng: number | null,
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
