import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Quiz, QuizForUser, QuizResponse } from '../models/quiz';
import { map, tap } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';
import { replaceHtmlEntities, shuffle } from '../utils/utils';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  private readonly amount = 5;
  private readonly type = 'multiple';
  private _allAnswerProvided = false;

  private _quizForUser: QuizForUser[] = [];

  public get quizForUser(): QuizForUser[] {
    return this._quizForUser;
  }
  public set quizForUser(value: QuizForUser[]) {
    this._quizForUser = value;
  }

  public get allAnswerProvided(): boolean {
    return this._allAnswerProvided;
  }
  public set allAnswerProvided(value) {
    this._allAnswerProvided = value;
  }

  constructor(private http: HttpClient) {}

  createQuiz(category: number, difficulty: string): Observable<QuizForUser[]> {
    const url = 'https://opentdb.com/api.php';
    const params = new HttpParams()
      .append('amount', this.amount)
      .append('category', category)
      .append('difficulty', difficulty)
      .append('type', this.type);

    return this.http.get<QuizResponse>(url, { params }).pipe(
      map((res: QuizResponse) => {
        return res.results.map((q: Quiz) => {
          const shuffledQuestions = shuffle(
            q.incorrect_answers.concat(q.correct_answer)
          ).map((q) => replaceHtmlEntities(q));

          return {
            question: replaceHtmlEntities(q.question),
            questions: shuffledQuestions,
            correct_answer: q.correct_answer,
            user_answer: '',
          };
        });
      }),
      tap((quiz) => {
        this._quizForUser = [];
        this._quizForUser = quiz;
      })
    );
  }

  setAnswer(
    answer: string,
    _indexOfanswer: number,
    indexOfQuestion: number
  ): void {
    this._quizForUser[indexOfQuestion].user_answer = answer;
    this.checkForAllAnswer(this.quizForUser);
  }

  checkForAllAnswer(quizForUser: QuizForUser[]): void {
    this.allAnswerProvided = quizForUser.every((q) => q.user_answer !== '');
  }

  getCorrectAnswer(): number {
    return this._quizForUser.reduce((acc: number, curr: QuizForUser) => {
      return acc + (curr.user_answer === curr.correct_answer ? 1 : 0);
    }, 0);
  }
}
