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
  public tasks:{title:string}[] = [
    {
      title: 'primer tarea',
    },
    {
      title: 'segunda tarea',
    },
    {
      title: 'tercer tarea',
    },
    {
      title: 'cuarta tarea',
    },
  ]

  public options = [
    'un',
    'dos',
    'tres',
    'cuatro',
    'cinco',
    'doce',
    'veinte',
    'ninguno'
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

  trackByUserId(index: number, item: any): number {
    return item.id;
  }

  newUser(){
    this.users?.push({
      id:10,
      avatar: "data:image/jpeg;base64,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",
      name: "Cristian",
      age: 31,
      description: "Desarrollador Frontend",
      gender:'',
      work: "Proyect Manager"
    })
  }
}
