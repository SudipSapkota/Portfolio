import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'my-projects',
	templateUrl: 'my-projects.component.html',
	styleUrls: ['my-projects.component.scss'],
})

export class MyProjectsComponent implements OnInit {
  projects = [
    {
      title: 'Portfolio Website',
      description: 'A responsive, personal portfolio built with Angular and SCSS.',
      image: 'assets/projects/portfolio.png',
      tags: ['Angular', 'SCSS', 'Responsive'],
      link: 'https://your-portfolio.com',
      repo: 'https://github.com/yourname/portfolio-angular',
    },
    {
      title: 'Library Management System',
      description: 'A system to manage book records and user activity.',
      image: 'assets/projects/library.png',
      tags: ['Angular', 'C#', '.NET'],
      repo: 'https://github.com/yourname/library-system',
    },
    {
      title: 'Field Visit Monitoring',
      description: 'An environmental project data monitoring dashboard.',
      image: 'assets/projects/fieldvisit.png',
      tags: ['Angular', 'Reactive Forms', 'MEAL'],
    },
  ];
	ngOnInit() { }
}