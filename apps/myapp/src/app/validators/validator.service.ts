import { Injectable } from '@angular/core';

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

    constructor(private commonStringMaxLengthValidatorGenService: CommonStringMaxLengthValidatorGenService) {}

    validate({ siteIdList, text }) {
        const textErrors = [];
        const textErrorsIsNotCompliantWithBackEnd = this.commonStringMaxLengthValidatorGenService.validateGen(5000)(text);
        if (textErrorsIsNotCompliantWithBackEnd) {
            textErrors.push(PersonneCreationFormValidatorService.errorCodeTextCompliantWithBackEnd);
        }
        const textErrorsIsNotCompliantWithPos = this.commonStringMaxLengthValidatorGenService.validateGen(20)(text);
        if (textErrorsIsNotCompliantWithPos) {
            textErrors.push(PersonneCreationFormValidatorService.errorCodeTextCompliantWithPos);
        }
        return textErrors;
    }

    getRandom(min, max) {
        let random = null;
        setTimeout(() => { random = Math.random()*(max-min);}, 2000);
        return random;
    }
}
