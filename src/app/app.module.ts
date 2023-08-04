import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { QuizGeneratorComponent } from './components/quiz-generator/quiz-generator.component';
import { FormsModule } from '@angular/forms';
import { QuestionsComponent } from './components/questions/questions.component';
import { SelectableButtonComponent } from './components/selectable-button/selectable-button.component';
import { AnswersComponent } from './components/answers/answers.component';
import { SelectOptionComponent } from './components/select-option/select-option.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { ResultComponent } from './components/result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizGeneratorComponent,
    QuestionsComponent,
    SelectableButtonComponent,
    AnswersComponent,
    SelectOptionComponent,
    PageNotFoundComponent,
    HomeComponent,
    ResultComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
