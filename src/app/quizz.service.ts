import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class QuizzService {
  readonly nbQuestions = 0
  score = 0

  private shuffle ( a : any []): any [] {
    for ( let i = a . length - 1 ; i > 0 ; i --) {
    const j = Math . floor ( Math . random () * ( i + 1 ));
    [ a [ i ], a [ j ]] = [ a [ j ], a [ i ]];
    }
    return a ;
    }

  constructor() { }

  
  buildNewQuizz(){
    
  }
}
