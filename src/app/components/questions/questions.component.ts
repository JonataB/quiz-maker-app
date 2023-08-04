import { Component, Input, OnInit } from '@angular/core';
import { QuizForUser } from 'src/app/models/quiz';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
})
export class QuestionsComponent implements OnInit {
  @Input()
  questions!: QuizForUser[];

  constructor(public quizService: QuizService) {}

  ngOnInit(): void {}
}
