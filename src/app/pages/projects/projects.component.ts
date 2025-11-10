import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Hotel Management',
      description:
        'Designed and built a full-stack booking and room management system to streamline hotel operations.',
      image: 'img/hotel.jpg',
      tech: [
        { name: 'TypeScript', logo: 'png/ts.png' },
        { name: 'Java', logo: 'png/java.png' },
        { name: 'Spring Boot', logo: 'png/spring-boot.png' },
        { name: 'Angular', logo: 'png/favicon.ico' },
        { name: 'MySQL', logo: 'png/mysql.png' },
      ],
      link: 'https://github.com/ambujsolanki/Hotel-Management-System',
    },
    {
      title: 'PetPal',
      description:
        'A pet services platform for daycare, adoption, and caretaking built using React, TypeScript, and MongoDB.',
      image: 'img/petpal.jpg',
      tech: [
        { name: 'React', logo: 'png/react.png' },
        { name: 'TypeScript', logo: 'png/ts.png' },
        { name: 'MongoDB', logo: 'png/mongodb.png' },
        { name: 'NodeJs', logo: 'png/nodejs.png' },
      ],
      link: 'https://github.com/ambujsolanki/petpal',
    },
  ];

  openProject(url: string) {
    window.open(url, '_blank');
  }
}
