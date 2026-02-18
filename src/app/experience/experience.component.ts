import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, MatStepperModule, MatIconModule, MatButtonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  experiences = [
    {
      title: 'Team Lead',
      period: 'Dec 2025 - Present',
      company: 'Accenture',
      details: 'Lead frontend team, own UI architecture, and drive best practices, mentorship, and hiring.'
    },
    {
      title: 'Senior Software Engineer',
      period: 'Dec 2021 - Dec 2025',
      company: 'Accenture',
      details: 'Delivered major features, performance optimizations, and introduced testing and CI practices.'
    },
    {
      title: 'Software Engineer',
      period: 'Dec 2019 - Dec 2021',
      company: 'Accenture',
      details: 'Built reusable Angular components and improved quality with strict typing and tests.'
    },
    {
      title: 'Associate Roles',
      period: '2015 - 2019',
      company: 'Accenture',
      details: 'Progressed through associate levels and built a strong TypeScript and web engineering base.'
    }
  ];
}
