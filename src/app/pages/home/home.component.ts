import { Component, ViewChild, ElementRef, AfterViewInit  } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  imgSrc: string = 'vdo/bg-gif.gif'
  constructor(private router: Router) {}
  cards = [
    { title: 'Work Permit', image: 'img/work.jpg', route: '/work' },
    { title: 'Skills', image: 'img/skills.jpg', route: '/skills' },
    { title: 'Experience', image: 'img/experience.jpg', route: '/profession' },
    { title: 'Certifications', image: 'img/certifications.jpg', route: '/certifications' },
    { title: 'Recommendations', image: 'img/Recommendations.jpg', route: 'file/Referenceletter.pdf' },
    { title: 'Projects', image: 'img/projects.jpg', route: '/projects' },
    { title: 'Contact Me', image: 'img/contact.png', route: '/contact' }
  ];

  decks = [
    { title: 'Hobbies', image: 'img/hobbies.jpg', route: '/hobbies' },
    { title: 'Soft Skills', image: 'img/soft.jpg', route: '/softskills' },
    { title: 'Contact Me', image: 'img/contact2.jpg', route: '/contact' }
  ];

  navigateTo(route: string) {
    if (route.startsWith('file/')) {
    window.open(route, '_blank'); // opens in a new tab
  } else {
    this.router.navigate([route]);
  }
  }
}
