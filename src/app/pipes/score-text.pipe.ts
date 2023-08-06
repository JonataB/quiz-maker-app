import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'scoreText',
})
export class ScoreTextPipe implements PipeTransform {
  transform(value: number, max: number): string {
    return `You scored ${value} out of ${max}`;
  }
}
