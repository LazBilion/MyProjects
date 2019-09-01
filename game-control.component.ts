import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() numberAdded = new EventEmitter<number>();
  interval;
  lastInterval = 0;

  constructor() { }

  ngOnInit() {
  }

  onTimerStart(){
    this.interval= setInterval(() => {
      this.numberAdded.emit(this.lastInterval+1);
      this.lastInterval++;
    }, 1000);
  }

  onGameStop(){
    clearInterval(this.interval);
  }
}
