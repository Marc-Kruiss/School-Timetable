import { Component, OnInit } from '@angular/core';
import { LessonService } from '../lesson-service/lesson.service';
import { Lesson } from '../lesson/app.lesson';



@Component({
  selector: 'app-planer',
  templateUrl: './planer.component.html',
  styleUrls: ['./planer.component.css']
})
export class PlanerComponent implements OnInit {

  daysArray:string[] = ['Monday','Tuesday'];
  selectedDay:string;

  lessonService:LessonService;

  searchString:string = "";

  updatingRow:number = -1;

  newSubject:string;
  newTeacher:string;
  newIndex:string;
  newDay:string;

  breakEnd:number;

  constructor(ls:LessonService) {this.lessonService=ls }

  ngOnInit(): void {
    //this.lessonService.findAll();
    console.log(this.lessonService.findAll());
  }

  onDelete(id:number):void{
    this.lessonService.removeLesson(id)
  }

  onUpdate(editRow:number):void{
      this.updatingRow = editRow;
    }

  onInsert():void{
    console.log(this.newDay);
    console.log(this.newIndex);
    console.log(this.newSubject);
    console.log(this.newTeacher);

    
    let lesson = new Lesson(null,this.newDay,parseInt(this.newIndex),this.newSubject,this.newTeacher);
    this.lessonService.insertLesson(lesson);
  }

  onCancel():void{
    this.updatingRow = -1;
    window.location.reload();
  }

  onCommit(lesson:Lesson):void{
      this.lessonService.updateLesson(lesson);
      this.updatingRow = -1;
  }

  matchesSearch(lesson:Lesson):boolean{
    return lesson.subject.toLocaleLowerCase().includes(this.searchString.toLocaleLowerCase()) || lesson.subject.toLocaleLowerCase().includes(this.searchString.toLocaleLowerCase())
  }

  getNumberArrayTill(number:number){
    return new Array(number)
  }

  getLessonWithDay(day:string){
    let resultList = [];
    this.lessonService.lessons.forEach(lesson => {
      if(lesson.day==day){
        resultList.push(lesson)
      }
    });
    console.log('For day '+day+': ');
    console.log(resultList);
    
    return resultList;
  }

  getCurrentTimespan(index:number){
    let beginTime = 8;
    let timespan = beginTime+index;
    this.breakEnd=timespan-beginTime;
    return timespan;
  }
}
