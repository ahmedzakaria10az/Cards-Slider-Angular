import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calc'
})
export class CalcPipe implements PipeTransform {
  
  transform(value: number,rate:number=50): number {
    return Math.floor(value*rate);
  }

}
