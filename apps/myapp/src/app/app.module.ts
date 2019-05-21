import { metaReducers, reducers } from './reducers';

import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { UserListEffects } from './user-list/effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([UserListEffects]),
    StoreDevtoolsModule.instrument({
      name: 'NgRx App'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
