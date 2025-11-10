import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent {
  skillSections = [
    {
      title: 'Programming Languages',
      items: [
        { name: 'JavaScript', icon: 'png/js.png' },
        { name: 'TypeScript', icon: 'png/ts.png' },
        { name: 'Java', icon: 'png/java.png' },
        { name: 'Python', icon: 'png/python.png' },   
      ],
    },
    {
      title: 'Frontend',
      items: [
        { name: 'Angular', icon: 'png/favicon.ico' },
        { name: 'React', icon: 'png/react.png' },
        { name: 'HTML5', icon: 'png/html.png' },
        { name: 'CSS', icon: 'png/css.png' },
      ],
    },
    {
      title: 'Backend',
      items: [
        { name: 'Node.js', icon: 'png/nodejs.png' },
        { name: 'SpringBoot', icon: 'png/spring-boot.png' },
      ],
    },
    {
      title: 'Database',
      items: [
        { name: 'SQL', icon: 'png/sql.png' },
        { name: 'MySQL', icon: 'png/mysql.png' },
        { name: 'MongoDB', icon: 'png/mongodb.png' },
        { name: 'SAP HANA Cloud', icon: 'png/SAP.png' },
      ],
    },
    
    {
      title: 'Tools',
      items: [
        { name: 'Git', icon: 'png/git.png' },
        { name: 'VS', icon: 'png/vs.png' },
        { name: 'Docker', icon: 'png/docker.png' },
      ],
    },
  ];
}
