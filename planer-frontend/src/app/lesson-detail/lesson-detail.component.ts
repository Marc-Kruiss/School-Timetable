import { Component, Input, OnInit } from '@angular/core';
import { Lesson } from '../lesson/app.lesson';

@Component({
  selector: 'app-lesson-detail',
  templateUrl: './lesson-detail.component.html',
  styleUrls: ['./lesson-detail.component.css']
})
export class LessonDetailComponent implements OnInit {

  @Input() lesson:Lesson;

  @Input() from:number;
  @Input() to:number;


  constructor() { }

  ngOnInit(): void {
  }

}
