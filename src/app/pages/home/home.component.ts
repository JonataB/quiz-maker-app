import { Component } from '@angular/core';
import { QuizForUser } from 'src/app/models/quiz';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  title = 'QUIZ MAKER';
  questions: QuizForUser[] = [];

  constructor(private quizService: QuizService) {}

  onQuestionsCreated(questions: QuizForUser[]) {
    this.quizService.allAnswerProvided = false;
    this.questions = questions;
  }
}
