import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { USERS_DATA } from '@data/constants/users.const';
import { ICardUser } from '@shared/components/cards/card-user/icard-user.metadata';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent{
  public id: number;
  public users: ICardUser[] = USERS_DATA;
  public currentrUsers: ICardUser | null;
  constructor(
      private route: ActivatedRoute
    ){
      this.id = +this.route.snapshot.params['id'];
      this.currentrUsers = this.users.find((user) => user.id === this.id ) || null;
    }


}
