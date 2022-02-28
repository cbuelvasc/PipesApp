import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fly',
})
export class FlyPipe implements PipeTransform {
  transform(canFly: boolean = true): string {
    return canFly ? 'fly' : 'not fly';
  }
}
