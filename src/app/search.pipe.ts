import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  constructor(private sanitizer:DomSanitizer){}

  
  transform(students: any , searchValue : string): any {
    if(!students || !searchValue){
      return this.sanitizer.bypassSecurityTrustHtml('<div style="background-color:red";>' + students + '</div>');
     
    }
    
        return  students.filter((student:any) => 
        student.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) || 
        student.marks.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) || 
        student.grade.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) || 
        student.email.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    
          );
      }

}
