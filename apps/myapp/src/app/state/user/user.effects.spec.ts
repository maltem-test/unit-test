import { provideMockActions } from '@ngrx/effects/testing';
import { TestBed } from '@angular/core/testing';
import { UserService } from '@core/services/user.service';
import { Observable } from 'rxjs';
import {
  UpdateUserSuccess
} from './user.actions';
import { UserEffects } from './user.effects';
import { generateUser } from './user.model';

describe('UserEffects', () => {
  let actions: Observable<any>;
  let effects: UserEffects;
  let userService: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UserEffects,
        provideMockActions(() => actions)
        {
          provide: UserService,
          useValue: {
            addUser: jest.fn(),
            getUser: jest.fn(),
            getUsers: jest.fn(),
            updateUser: jest.fn()
          }
        }
      ]
    });

    effects = TestBed.get(UserEffects);
    userService = TestBed.get(UserService);
  });

  it('should be created', () => {
    /**
     * à compléter
     */
  });

  describe('loadUser', () => {
    it('should return a LoadUserFail action, with an error, on failure', () => {
      const user = generateUser();
      const error = new Error();
      /**
       * à compléter
       */
    });
  });

  describe('updateUser', () => {
    it('should return an UpdateUserSuccess action, with the user, on success', () => {
      const user = generateUser();
      const outcome = new UpdateUserSuccess({
        update: {
          id: user.id,
          changes: user
        }
      });
      /**
       * à compléter
       */
    });
  });
  
});
