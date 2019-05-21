import * as fromRoot from './reducers';

import { Store, select } from '@ngrx/store';

import { Component } from '@angular/core';
import { LoadUsers } from './user-list/actions';
import { Observable } from 'rxjs/internal/Observable';
import { User } from './user-list/model';

@Component({
  selector: 'jestworkspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  error$: Observable<Error>;
  loading$: Observable<boolean>;
  userList$: Observable<User[]>;

  constructor(private store: Store<fromRoot.State>) {
    this.error$ = this.store.pipe(select(fromRoot.getError));
    this.loading$ = this.store.pipe(select(fromRoot.getLoading));
    this.userList$ = this.store.pipe(select(fromRoot.getUserList));
  }

  loadUserList(){
    this.store.dispatch(new LoadUsers());
  }
}
