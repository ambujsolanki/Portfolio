import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hobbies',
  imports: [CommonModule],
  templateUrl: './hobbies.component.html',
  styleUrl: './hobbies.component.css'
})
export class HobbiesComponent {
  hobbies = [
    { name: 'Reading', image: 'img/reading.jpg' },
    { name: 'Traveling', image: 'img/travel.jpg' },
    { name: 'Gaming', image: 'img/gaming.jpg' },
    { name: 'Cooking', image: 'img/cooking.jpg' },
    { name: 'Music', image: 'img/music.jpg' },
  ];
}
