import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-profession',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profession.component.html',
  styleUrls: ['./profession.component.css'],
})
export class ProfessionComponent {
  timeline = [
  {
    side: 'left',
    role: 'Working Student',
    company: 'SAP',
    period: 'Aug 2024 – Sep 2025',
    description: 'Developed and optimized a custom dbt adapter for SAP HANA Cloud, extending dbt’s capabilities for enterprise data modeling and transformation. Collaborated in an agile environment, contributing to sprint planning and technical design.',
    icon: 'work',
    techUsed: ['Python', 'Jinja2', 'SAP HANA Cloud', 'dbt', 'SQL']
  },
  {
    side: 'right',
    role: 'Thesis Student',
    company: 'SAP',
    period: 'Feb 2025 – Jul 2025',
    description: 'Researched and compared AI-generated vs. manually written code for developing a dbt adapter for SAP HANA Cloud. Evaluated performance, maintainability, and correctness of AI-assisted development workflows.',
    icon: 'work',
    techUsed: ['Python', 'AI Automation', 'Jinja2', 'SAP HANA Cloud', 'dbt', 'SQL']
  },
  {
    side: 'left',
    role: 'Senior Test Engineer',
    company: 'GlobalStep',
    period: 'Feb 2022 – Sep 2023',
    description: 'Led a QA team of four, managing functional and regression testing for game and web applications. Designed automated test cases using Selenium and improved defect reporting and tracking processes.',
    icon: 'work',
    techUsed: ['Selenium', 'Java', 'Manual Testing']
  },
  {
    side: 'right',
    role: 'Test Engineer',
    company: 'Pole to Win',
    period: 'Jul 2019 – Feb 2022',
    description: 'Performed manual testing for console and mobile games, ensuring functionality, usability, and stability. Supported QA leads with test planning, documentation, and issue analysis to enhance product quality',
    icon: 'work',
    techUsed: ['Manual Testing']
  },
  {
    side: 'left',
    role: 'M.Sc. Applied Computer Science',
    company: 'SRH University Heidelberg',
    period: 'Oct 2023 – Sep 2025',
    description: 'Specializing in Business Computing (SAP) with hands-on experience in SAP HANA Cloud and SAP ABAP, data modeling, and backend development.',
    icon: 'school'
  },
  {
    side: 'right',
    role: 'B.Tech. Computer Science and Engineering',
    company: 'Sree Vidyanikethan Engineering College',
    period: 'Jun 2015 – May 2019',
    description: 'Built a strong foundation in software development, data structures, and system design through academic and project-based learning.',
    icon: 'school'
  }
];

  start = [
    {
      icon: 'star',
    },
  ];
}
