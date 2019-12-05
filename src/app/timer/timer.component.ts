import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  startTime: Date
  timer: any = null
  maxTime = 60
  ellapsedTime = '00:00'
  constructor() { }

  ngOnInit() {
      this.startTime = new Date();
      this.ellapsedTime = '00:00';
      this.timer = setInterval(() => { this.tick(); }, 1000);
  }

  timeSpent() {
    this.timer = setInterval(() => { this.tick(); }, 1000);
    const now = new Date();
    const diff = (now.getTime() - this.startTime.getTime()) / 1000;
    if (diff >= this.maxTime) {
      // submit quizz -will stop the timer
      clearInterval(this.timer)
    }
    this.ellapsedTime = this.parseTime(diff);
  }

  tick() {
    const now = new Date();
    const diff = (now.getTime() - this.startTime.getTime()) / 1000;
    if (diff >= this.maxTime) {
      // submit quizz -will stop the timer  
      clearInterval(this.timer)
    }
    this.ellapsedTime = this.parseTime(diff);
  }
  
  parseTime(totalSeconds: number) {
    let mins: string | number = Math.floor(totalSeconds / 60);
    let secs: string | number = Math.round(totalSeconds % 60);
    mins = (mins < 10 ? '0' : '') + mins;
    secs = (secs < 10 ? '0' : '') + secs;
    return `${mins}:${secs}`;
  }
}