import { Pipe, PipeTransform } from '@angular/core';
import { KeyValue } from '@angular/common';
@Pipe({ name: 'formPipe' })
export class FormPipe implements PipeTransform {
  transform = (
    a: KeyValue<number, string>,
    b: KeyValue<number, string>
  ): number => {
    return a.value.localeCompare(b.value);
  };
}
