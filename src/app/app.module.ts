import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import questions from '../../../questions.json'

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { QuizzComponent } from './quizz/quizz.component';
import { ScoreComponent } from './score/score.component';
import { TimerComponent } from './timer/timer.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule }    from '@angular/common/http';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'quizz', component: QuizzComponent },
  { path:'', 
    redirectTo:'/home',
    pathMatch:'full'
  },
];

@NgModule({
  declarations: [
    AppComponent,
    QuizzComponent,
    ScoreComponent,
    TimerComponent,
    HomeComponent,
    ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    RouterModule.forRoot(appRoutes,
      {enableTracing:true}
    ),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
