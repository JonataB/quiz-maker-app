import { Component, Input, OnInit } from '@angular/core';
import { QuizForUser } from 'src/app/models/quiz';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.scss'],
})
export class AnswersComponent implements OnInit {
  allAnswers = false; // to show SUBMIT

  @Input()
  questions!: QuizForUser[];

  @Input()
  answers!: string[];

  answerSelected?: string;

  constructor(private quizService: QuizService) {}

  ngOnInit(): void {}

  selectedItem(item: string): void {
    this.answerSelected = item;
  }

  onSelected(answer: string, indexOfanswer: number): void {
    const indexOfQuestion: number = this.questions.findIndex(
      (q: QuizForUser) => {
        return q.questions.find((q) => q === answer);
      }
    );
    this.quizService.setAnswer(answer, indexOfanswer, indexOfQuestion);
  }
}
