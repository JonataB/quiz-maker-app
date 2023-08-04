export interface QuizResponse {
  response_code: number;
  results: Quiz[];
}

export interface Quiz {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export interface QuizForUser {
  correct_answer: string;
  questions: string[];
  question: string;
  user_answer: string;
}
