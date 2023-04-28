import { Injectable } from '@angular/core';
import { ApiClass } from '@data/schema/ApiClass.class';
import { ICardUser } from '@shared/components/cards/card-user/icard-user.metadata';
import { Observable, catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService extends ApiClass {

  /**
   * Get all user from api
   * @returns
   */
  getAllUsers(): Observable<{
    error:boolean,
    msg: string,
    data: ICardUser[] | null
  }>{
    const response: { error: boolean, msg: string, data: ICardUser[] | null } = {error: false, msg:'', data: null }
    return this.http.get<ICardUser[]>(`${this.url}users`).pipe(
        map(
          (r: ICardUser[]) => {
            response.data = r;
            return response;
          }
        ),
        catchError(this.error)
      );
  }


  /**
   * Get an user by id from api
   * @param id number
   * @returns Observale
   */
  getUserById(id:number): Observable<{
    error:boolean,
    msg: string,
    data: ICardUser | null
  }>{
    const response: { error: boolean, msg: string, data: ICardUser | null } = {error: false, msg:'', data: null }
    return this.http.get<ICardUser>(`${this.url}users/${id}`).pipe(
        map(
          (r: ICardUser) => {
            response.data = r;
            return response;
          }
        ),
        catchError(this.error)
      );
  }

}
