import { Author } from './author';

export interface Course {
  id: number;
  name: string;
  description: string;
  date: string;
  duration?: number;
  authors?: Author[];
  isTopRated?: boolean;
}
