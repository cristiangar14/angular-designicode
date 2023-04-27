import { Component } from '@angular/core';
import { USERS_DATA } from '@data/constants/users.const';

import { ICardUser } from '@shared/components/cards/card-user/icard-user.metadata';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  public users: ICardUser[] = USERS_DATA;
  public text: string = 'Lista de usuarios';
  public type: string =  'primary';

}
