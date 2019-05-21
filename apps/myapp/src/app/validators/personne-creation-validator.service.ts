import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonneCreationValidatorService {

  constructor() { }

  filterValidator(filter: object) {
    console.log(filter);
  }
}
