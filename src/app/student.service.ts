import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }
  getAllStudent(){
    return this.http.get(" http://localhost:8080/searchAll");
  }
  addStudent(add:any){
    return this.http.post("http://localhost:8080/insertData",add)
  }
  deleteStudent(userId:any){
    return this.http.delete("http://localhost:8080/remove/"+userId)
  }
  updateStudent(userId:any,updatebody:any){
    return this.http.put("http://localhost:8080/update/"+userId,updatebody)
  }
}
