import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonneCreationFormValidatorService, CommonStringMaxLengthValidatorGenService } from './validators/validator.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [PersonneCreationFormValidatorService, CommonStringMaxLengthValidatorGenService],
  bootstrap: [AppComponent]
})
export class AppModule {}
