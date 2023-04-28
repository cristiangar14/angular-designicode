export interface ICarouselItem {
  id: number;
  image: string;
  title?: {
    first: string,
    second: string
  };
  subtitle?: string;
  link?: string;
  order?: number;
  marginLeft?: number;
}
