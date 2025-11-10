import { Component, HostListener  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.css'
})
export class CertificationsComponent {
  certificates = [
    { icon: 'code', name: 'Python for Everybody', link: 'https://www.coursera.org/account/accomplishments/specialization/VSEW7SQECVQ2', institute: 'By University of Michigan (Coursera)' },
    { icon: 'web', name: 'Explore Web Development with Angular', link: 'https://www.linkedin.com/learning/certificates/b58ad692d247b6278c2a79e7728f0747688e4a47c356fea0cda9ce7799895f1c?u=57692769', institute: 'Linkedin Learning' },
    { icon: 'build', name: 'Containerize Applications with Docker', link: 'https://www.linkedin.com/learning/certificates/f32f8bdb34edc62efffef5708241ff9fc28fa43045af75cdb9d4e351a232289e?u=57692769', institute: 'Linkedin Learning' },
  ];

}
