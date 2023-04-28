import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { USERS_DATA } from '@data/constants/users.const';
import { UserService } from '@data/services/api/user.service';
import { ICardUser } from '@shared/components/cards/card-user/icard-user.metadata';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit{
  public id: number;
  public currentrUser: ICardUser | null = null;
  constructor(
      private route: ActivatedRoute,
      private userService: UserService
    ){
      this.id = +this.route.snapshot.params['id'];
    }

  ngOnInit(): void {
    this.userService.getUserById(this.id).subscribe({
      next: (resp) => {
        this.currentrUser = resp.data;
      }
    })
  }


}
