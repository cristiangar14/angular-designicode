import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent {
  public id: number;

  constructor(
      private route: ActivatedRoute
    ){
      this.id = this.route.snapshot.params['id'];
    }


}
