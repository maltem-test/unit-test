import { Actions, Effect, ofType } from '@ngrx/effects';
import {
  LoadUsers,
  LoadUsersFail,
  LoadUsersSuccess,
  UserListActionTypes
} from './actions';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { generateUsers } from './model';

@Injectable()
export class UserListEffects {
  @Effect()
  loadUsers: Observable<Action> = this.actions$
    .pipe(
      ofType<LoadUsers>(UserListActionTypes.LoadUsers),
      map(() => new LoadUsersSuccess(generateUsers())),
      catchError(error => of(new LoadUsersFail(error)))
    );

  constructor(private actions$: Actions) {}
}
