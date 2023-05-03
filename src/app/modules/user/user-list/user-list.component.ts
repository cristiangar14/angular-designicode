import { Component, OnInit } from '@angular/core';
import { CAROUSEL_DATA_ITEMS } from '@data/constants/carousel.const';
import { USERS_DATA } from '@data/constants/users.const';
import { UserService } from '@data/services/api/user.service';

import { ICardUser } from '@shared/components/cards/card-user/icard-user.metadata';
import { ICarouselItem } from '@shared/components/carousel/ICarousel-item.metadata';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent{
  public carouselData: ICarouselItem[] = CAROUSEL_DATA_ITEMS;
  public users: ICardUser[] | null = null;
  public text: string = 'Lista de usuarios';
  public type: string =  'primary';
  public tasks = [
    'primer tarea',
    'segunda tarea',
    'tercer tarea',
    'cuarta tarea',
  ]

  constructor(
    private userService: UserService
  ){
    this.userService.getAllUsers().subscribe({
      next: (resp) => {
        if (!resp.error) {
          this.users = resp.data;
        }
      }
    })
  }

}
