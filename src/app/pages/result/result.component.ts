import { Component, OnInit } from '@angular/core';
import { QuizForUser } from 'src/app/models/quiz';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit {
  correctAnswer = 0;
  totalQuestions = 0;
  quiz: QuizForUser[] = [];

  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    this.correctAnswer = this.quizService.getCorrectAnswer();
    this.totalQuestions = this.quizService.quizForUser.length;
    this.quiz = this.quizService.quizForUser;
  }

  setColor(item: string, quiz: QuizForUser) {
    if (item === quiz.correct_answer) {
      return 'correct';
    } else if (item !== quiz.correct_answer && item === quiz.user_answer) {
      return 'uncorrect';
    } else {
      return '';
    }
  }
}
