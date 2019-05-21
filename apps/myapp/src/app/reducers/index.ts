import * as fromUserList from '../user-list/reducer';

import {
    ActionReducer,
    ActionReducerMap,
    MetaReducer,
    createFeatureSelector,
    createSelector
} from '@ngrx/store';

export interface State {
    "user-list": fromUserList.State;
}
  
export const reducers: ActionReducerMap<State> = {
    "user-list": fromUserList.reducer
};
  
export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
    return (state, action) => {
      const result = reducer(state, action);
      console.groupCollapsed(action.type);
      console.log('prev state', state);
      console.log('action', action);
      console.log('next state', result);
      console.groupEnd();
  
      return result;
    };
}
  
export const metaReducers: MetaReducer<State>[] = [logger];
  
export const getUserListState = createFeatureSelector<State, fromUserList.State>(
    "user-list"
);

export const getError = createSelector(
    getUserListState,
    fromUserList.getError
);

export const getLoading = createSelector(
    getUserListState,
    fromUserList.getLoading
);

export const getUserList = createSelector(
    getUserListState,
    fromUserList.getUserList
);
