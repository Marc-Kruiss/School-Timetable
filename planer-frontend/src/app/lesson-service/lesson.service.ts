import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Lesson } from '../lesson/app.lesson';

@Injectable({
  providedIn: 'root'
})
export class LessonService {
  http: HttpClient;
  public lessons;
  url: string="http://localhost:8080/planer";

  constructor(http:HttpClient) {this.http=http }

  findAll():void{
    this.http.get<Lesson[]>(this.url+"/findAll").subscribe(data=>this.lessons=data);
  }

  removeLesson(id:number):void{
    console.log("On Delete: "+id);
    this.http.delete(this.url+"/delete/"+id).subscribe(()=>{window.location.reload()});
  }

  updateLesson(lesson:Lesson):void{
    this.http.put(this.url+'/update',lesson)
    .subscribe(()=>
    {
      console.log("Updated "+lesson.subject);
      window.location.reload();
    });
  }

  insertLesson(lesson:Lesson):void{
    this.http.post(this.url+"/create",lesson)
    .subscribe(()=>
    {
      console.log("Inserted"+lesson.id);
      window.location.reload();
    });
  }
}
