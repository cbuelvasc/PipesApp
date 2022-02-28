import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalLetters',
})
export class CapitalLettersPipe implements PipeTransform {
  transform(value: string, isCapital: boolean = true): string {
    return isCapital ? value.toUpperCase() : value.toLowerCase();
  }
}
