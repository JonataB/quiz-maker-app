import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { QuizGeneratorComponent } from './components/quiz-generator/quiz-generator.component';
import { FormsModule } from '@angular/forms';
import { QuestionsComponent } from './components/questions/questions.component';
import { SelectableButtonComponent } from './components/selectable-button/selectable-button.component';
import { AnswersComponent } from './components/answers/answers.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { ResultComponent } from './pages/result/result.component';
import { ScoreComponent } from './components/score/score.component';
import { ScoreTextPipe } from './pipes/score-text.pipe';
import { ServicesInterceptor } from './services/services.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    QuizGeneratorComponent,
    QuestionsComponent,
    SelectableButtonComponent,
    AnswersComponent,
    PageNotFoundComponent,
    HomeComponent,
    ResultComponent,
    ScoreComponent,
    ScoreTextPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ServicesInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
