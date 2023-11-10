import { InputGenericInterface } from './InputGeneric.interface';
import { RatingInterface } from './Rating.interface';

export interface CommentInterface {
  author: {
    _id: string;
    avatar: string;
    email: string;
    username: string;
    personal_data: {
      name: string;
      surname: string;
    };
  };
  title: InputGenericInterface;
  description: InputGenericInterface;
  date: Date;
  rating?: RatingInterface;
}
