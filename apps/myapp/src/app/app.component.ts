import { Component } from '@angular/core';
import { PersonneCreationValidatorService } from './validators/personne-creation-validator.service';

@Component({
  selector: 'jestworkspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [PersonneCreationValidatorService]
})

export class AppComponent {
  title = 'myapp';

  constructor( private personneCreationValidatorService: PersonneCreationValidatorService) {}

  
  filterValidator(){

  }

  
}
