import { Component, Input, OnInit } from '@angular/core';
import { Lesson } from '../lesson/app.lesson';

@Component({
  selector: 'app-day-timelist',
  templateUrl: './day-timelist.component.html',
  styleUrls: ['./day-timelist.component.css']
})
export class DayTimelistComponent implements OnInit {

  constructor() { }

  @Input() dayLessons:Lesson[];

  ngOnInit(): void {
  }

  breakEnd:number;

  getCurrentTimespan(index:number){
    let beginTime = 8;
    let timespan = beginTime+index;
    this.breakEnd=timespan-beginTime;
    return timespan;
  }

  getNumberArrayTill(number:number){
    return new Array(number)
  }

}
