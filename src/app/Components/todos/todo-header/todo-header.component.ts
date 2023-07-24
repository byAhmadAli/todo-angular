import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-header-component',
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.scss'],
})
export class TodosHeaderComponent implements OnInit {
  public randomWord: string = '';
  public day: string = '';

  constructor() {}

  ngOnInit() {
    this.pickRandomWord();
    this.getDay();
  }

  pickRandomWord() {
    const randomWordArray = Array(
      "Oh my, it's",
      "Whoop, it's",
      'Happy',
      "Seems it's",
      "Awesome, it's",
      'Have a nice',
      'Happy fabulous',
      'Enjoy your'
    );
    this.randomWord =
      randomWordArray[Math.floor(Math.random() * randomWordArray.length)];
  }

  getDay() {
    const date = new Date();
    const weekday = new Array(
      'Sunday 🖖',
      'Monday 💪😀',
      'Tuesday 😜',
      'Wednesday 😌☕️',
      'Thursday 🤗',
      'Friday 🍻',
      'Saturday 😴'
    );
    this.day = weekday[date.getDay()];
  }
}
