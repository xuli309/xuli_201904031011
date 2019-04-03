import { Directive } from '@angular/core';
import {AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors} from '@angular/forms';
import {Observable, of} from 'rxjs';
import {UserService} from '../user.service';
import {Result} from '../../common/results';
import {catchError, map} from 'rxjs/operators';

@Directive({
  selector: '[appPhoneValidator]', // 属性选择器
  providers: [
    { provide: NG_ASYNC_VALIDATORS, useExisting: PhoneValidatorDirective, multi: true }
  ]
})
export class PhoneValidatorDirective implements  AsyncValidator {

  constructor(private us: UserService) { }

  registerOnValidatorChange(fn: () => void): void {
  }

  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null>;
  validate(control: AbstractControl): ValidationErrors | null;
  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> | ValidationErrors | null {
    // 得到的数据结构是 Observable<Result<string>>
    // 但是当前函数需要 Observable<ValidationErrors>
    // 使用map操作符进行数据转换
    // rxjs
    return this.us.verifyPhone(control.value).pipe(
      map((r: Result<string>) => {
        // null 校验通过
        return r.success ? null : {verifyPhone: true};
      }),
      catchError(e => of({verifyPhone: true}))
    );
  }




}
