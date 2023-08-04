import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit {
  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    console.log(this.quizService.quizForUser);
  }
}
