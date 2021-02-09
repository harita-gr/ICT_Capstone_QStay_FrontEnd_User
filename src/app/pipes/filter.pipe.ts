import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[] , filterString:string, pptyName:string): any[] {
    const resultArray =[];
    //Checking if any of the mandatory inputs are null
    if( value.length ===0 || filterString === '' || pptyName === ''){
      return value; //return input array
    }
    for (const item of value){
      if (item[pptyName] === filterString ){
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
