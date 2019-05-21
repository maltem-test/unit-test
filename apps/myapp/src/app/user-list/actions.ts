import { Action } from '@ngrx/store';
import { User } from './model';

export enum UserListActionTypes {
  LoadUsers = '[User] LoadUsers',
  LoadUsersSuccess = '[User] LoadUsersSuccess',
  LoadUsersFail = '[User] LoadUsersFail'
}

export class LoadUsers implements Action {
  readonly type = UserListActionTypes.LoadUsers;
}

export class LoadUsersSuccess implements Action {
  readonly type = UserListActionTypes.LoadUsersSuccess;
  constructor(public payload: User[]) {}
}

export class LoadUsersFail implements Action {
  readonly type = UserListActionTypes.LoadUsersFail;
  constructor(public payload: Error) {}
}

export type UserListActions =
  | LoadUsers
  | LoadUsersSuccess
  | LoadUsersFail;
