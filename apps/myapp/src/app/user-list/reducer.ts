import { LoadUsersFail, LoadUsersSuccess, UserListActionTypes } from './actions';

import { Action } from '@ngrx/store';
import { User } from './model';

export interface State {
  error: Error;
  list: User[];
  loading: boolean;
}
 
const initialState: State = {
  error: new Error(''),
  list: [],
  loading: false
};

export function reducer(state: State = initialState, action: Action): State {
  switch (action.type) {
    case UserListActionTypes.LoadUsers:
      return {
        ...state,
        loading: true
      }

    case UserListActionTypes.LoadUsersFail:
      return {
        ...state,
        error: (<LoadUsersFail>action).payload,
        loading: false
      }

    case UserListActionTypes.LoadUsersSuccess:
      return {
        error: new Error(''),
        list: (<LoadUsersSuccess>action).payload,
        loading: false
      }

    default:
      return state;
  }
}

export const getError = (state: State) => state.error;
export const getUserList = (state: State) => state.list;
export const getLoading = (state: State) => state.loading;
