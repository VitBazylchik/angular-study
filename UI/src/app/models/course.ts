export interface Course {
  id: number;
  title: string;
  description: string;
  creationDate: number;
  duration: number;
  topRated?: boolean;
  authors?: string;
}
