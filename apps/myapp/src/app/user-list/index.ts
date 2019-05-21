import * as fromUserList from './reducer';

import { createFeatureSelector } from '@ngrx/store';

export const selectUserState = createFeatureSelector<fromUserList.State>('user-list');
