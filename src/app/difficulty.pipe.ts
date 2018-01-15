import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'difficulty'
})
export class DifficultyPipe implements PipeTransform {

  transform(value: number): string {
	  if (value<21){
		  return 'very easy';
	  } else if (value<41){
		  return 'easy';
	  } else if (value<61){
		  return 'medium';
	  } else if (value<81){
		  return 'hard';
	  } else {
		  return 'very hard';
	  }
  }

}
