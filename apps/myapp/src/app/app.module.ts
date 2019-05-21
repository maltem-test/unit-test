import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonneCreationValidatorService } from './validators/personne-creation-validator.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [PersonneCreationValidatorService],
  bootstrap: [AppComponent]
})
export class AppModule {}
