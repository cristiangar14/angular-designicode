import { Component } from '@angular/core';
import { ICardUser } from '@shared/components/cards/card-user/icard-user.metadata';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  public users: ICardUser[] = [
    {
      avatar: 'data:image/jpeg;base64,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',
      name: 'Cristian',
      age: 31,
      description: 'Desarrollador Frontend',
      work: 'Proyect Manager'
    },
    {
      avatar: 'data:image/jpeg;base64,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',
      name: 'Cristian',
      age: 31,
      description: 'Desarrollador Frontend'
    },
    {
      avatar: 'data:image/jpeg;base64,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',
      name: 'Cristian',
      age: 31,
      description: 'Desarrollador Frontend'
    },
    {
      avatar: 'data:image/jpeg;base64,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',
      name: 'Cristian',
      age: 31,
      description: 'Desarrollador Frontend'
    },
  ];
  public text: string = 'Lista de usuarios';
  public type: string =  'primary';

}
