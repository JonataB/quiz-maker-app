import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss'],
})
export class ScoreComponent implements OnInit {
  @Input()
  correctAnswers!: number;

  @Input()
  questionsCount!: number;

  ngOnInit(): void {}

  getCssClass(): 'red' | 'yellow' | 'green' | '' {
    switch (this.correctAnswers) {
      case 0:
      case 1:
        return 'red';
      case 2:
      case 3:
        return 'yellow';
      case 4:
      case 5:
        return 'green';

      default:
        return '';
    }
  }
}
