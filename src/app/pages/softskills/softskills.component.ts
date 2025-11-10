import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-softskills',
  imports: [CommonModule],
  templateUrl: './softskills.component.html',
  styleUrl: './softskills.component.css'
})
export class SoftskillsComponent {
  softskills = [
    { name: 'Adaptable', image: 'img/adaptable.jpg' },
    { name: 'Team Player', image: 'img/team.jpg' },
    { name: 'Quick Learner', image: 'img/quick.jpg' },
    { name: 'Strong Problem-Solving', image: 'img/problem.jpg' },
    { name: 'Effective Communicator', image: 'img/communicator.jpg' },
    { name: 'Detail Oriented', image: 'img/detail.jpg' },
  ];
}
