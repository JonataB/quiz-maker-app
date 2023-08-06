import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Category } from 'src/app/models/category.interface';
import { QuizForUser } from 'src/app/models/quiz';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'quiz-generator',
  templateUrl: './quiz-generator.component.html',
  styleUrls: ['./quiz-generator.component.scss'],
})
export class QuizGeneratorComponent implements OnInit {
  categories$: Observable<Category[]> = this.categoryService.getCategory();
  difficulties = ['easy', 'medium', 'hard'];

  selectedCategory = 0;
  selectedDifficulty = '';

  @Output()
  questions = new EventEmitter<QuizForUser[]>();

  loading = false;

  constructor(
    private categoryService: CategoryService,
    private quizService: QuizService
  ) {}

  ngOnInit(): void {}

  onCreate() {
    this.loading = true;
    this.quizService
      .createQuiz(this.selectedCategory, this.selectedDifficulty)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe((q) => this.questions.emit(q));
  }
}
