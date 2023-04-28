// Import components
import { TitleH1Component } from './titles/title-h1/title-h1.component';
import { CardUserComponent } from './cards/card-user/card-user.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CardLoaderComponent } from './loaders/card-loader/card-loader.component';

export const components: any[] = [
  CarouselComponent,
  CardLoaderComponent,
  TitleH1Component,
  CardUserComponent
];

//Export all components
export * from './titles/title-h1/title-h1.component';
export * from './cards/card-user/card-user.component';
export * from './carousel/carousel.component';
export * from './loaders/card-loader/card-loader.component';
