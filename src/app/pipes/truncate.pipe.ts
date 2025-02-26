import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return ''; 
    const words = value.split(' '); 
    const firstThreeWords = words.slice(0, 3).join(' '); 
    return `${firstThreeWords}...`; 
  }
}