import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Category } from 'src/app/models/category.interface';
import { QuizForUser } from 'src/app/models/quiz';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';
import { SelectOption } from '../select-option/select-option.component';

@Component({
  selector: 'quiz-generator',
  templateUrl: './quiz-generator.component.html',
  styleUrls: ['./quiz-generator.component.scss'],
})
export class QuizGeneratorComponent implements OnInit {
  categories$: Observable<Category[]> = this.categoryService.getCategory();
  difficulties: SelectOption[] = [
    { id: 1, name: 'easy' },
    { id: 1, name: 'medium' },
    { id: 1, name: 'hard' },
  ];

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

  // onCategorySelected(category: Category) {
  //   this.selectedCategory = category.id;
  // }

  // onDifficultySelected(difficulty: string) {
  //   this.selectedDifficulty = difficulty;
  // }
}
