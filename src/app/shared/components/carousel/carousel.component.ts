import { Component, Input, OnInit } from '@angular/core';
import { ICarouselItem } from './ICarousel-item.metadata';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit{

  /**
   * Custom properties
   */
  @Input() height:number = 500;
  @Input() isFullScreen:boolean = false;
  @Input() items:ICarouselItem[] = [];

  /**
   * Final properties
   */
  public finalHeight: string | number = 0;
  public currentPosition: number = 0;


  constructor(){
    this.finalHeight = this.isFullScreen ? '100vh' : `${this.height}px`;
  }

  ngOnInit(): void {
    this.items.map((item, index:number) => {
      item.id = index;
      item.marginLeft = 0;
    });
  }

  setCurrentPosition(position:number){
    this.currentPosition = position;
    this.items.find(item => item.id === 0)!.marginLeft = -100 * position;
  }

  setNext(){
    let finalPercentage = 0;
    let nextPosition = this.currentPosition + 1;

    if (nextPosition <= this.items.length - 1) {
      finalPercentage = -100 * nextPosition;
    } else {
      nextPosition = 0;
    }

    this.items.find(item => item.id === 0)!.marginLeft = finalPercentage;
    this.currentPosition = nextPosition;

  }

  setBack(){
    let finalPercentage = 0;
    let backPosition = this.currentPosition - 1;

    if (backPosition >= 0) {
      finalPercentage = -100 * backPosition;
    } else {
      backPosition = this.items.length - 1;
      finalPercentage = -100 * backPosition;
    }

    this.items.find(item => item.id === 0)!.marginLeft = finalPercentage;
    this.currentPosition = backPosition;

  }

}
