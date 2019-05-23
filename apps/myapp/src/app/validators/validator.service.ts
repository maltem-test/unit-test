import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
export interface ValidatedFields {
  siteIdList: number[];
  text: string;
}

@Injectable()
export class CommonStringMaxLengthValidatorGenService {
  validateGen(length: number) {
    return (str: string) => str.length > length;
  }
}

@Injectable()
export class PersonneCreationFormValidatorService {
  static errorCodeTextCompliantWithBackEnd = 100;
  static errorCodeTextCompliantWithPos = 101;

  constructor(
    private commonStringMaxLengthValidatorGenService: CommonStringMaxLengthValidatorGenService
  ) {}

  validate({ siteIdList, text }) {
    const textErrors = [];
    const minThan50CharValidator  =  this.commonStringMaxLengthValidatorGenService.validateGen(
        5000
      );
    const textErrorsIsNotCompliantWithBackEnd = minThan50CharValidator(text);
    if (textErrorsIsNotCompliantWithBackEnd) {
      textErrors.push(
        PersonneCreationFormValidatorService.errorCodeTextCompliantWithBackEnd
      );
    }
    const textErrorsIsNotCompliantWithPos = this.commonStringMaxLengthValidatorGenService.validateGen(
      20
    )(text);
    if (textErrorsIsNotCompliantWithPos) {
      textErrors.push(
        PersonneCreationFormValidatorService.errorCodeTextCompliantWithPos
      );
    }
    return textErrors;
  }

  getRandom({ min, max }: { min: number; max: number }) {
    return of(Math.random() * (max - min)).pipe(delay(500));
  }

  getFloor({ nmb }: { nmb: number }) {
    return of(Math.floor(nmb)).pipe(delay(500));
  }
}
