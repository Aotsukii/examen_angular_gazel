import { Component, OnInit } from '@angular/core'
import { Question } from '../question'
import { QuizzService } from '../quizz.service'
import questions from '../../../questions.json'

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css'],
  providers: [QuizzService]
})

export class QuizzComponent implements OnInit {
  public questionList:{pays:string,capitale:string,continent:string}[] = questions;
  iQuestion = 0
  currentQuestion = ""
  answer = ""
  found = false
  hasNext = true

  constructor() { }

  ngOnInit() {

  }

  newGame() {

  }

  loadNextQuestion() {

  }

  
  answerGiven(answer: string) {

  }

  showAnswer() {

  }

}
