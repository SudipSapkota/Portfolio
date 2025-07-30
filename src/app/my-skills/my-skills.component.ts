import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'my-skills',
	templateUrl: 'my-skills.component.html',
	styleUrls: ['./my-skills.component.scss'],
})

export class MySkillsComponent implements OnInit {
	 skills = [
    {
      name: 'Angular',
      icon: 'assets/icons/angular.svg',
      level: 'Advanced – 1+ year experience',
    },
    {
      name: 'TypeScript',
      icon: 'assets/icons/typescript.svg',
      level: 'Proficient – Daily use in Angular apps',
    },
    {
      name: 'HTML5',
      icon: 'assets/icons/html5.svg',
      level: 'Expert – Semantic & accessible markup',
    },
    {
      name: 'SCSS / CSS',
      icon: 'assets/icons/css3.svg',
      level: 'Advanced – Responsive & modern styling',
    },
    {
      name: 'RxJS',
      icon: 'assets/icons/rxjs.svg',
      level: 'Intermediate – Reactive state management',
    },
    {
      name: 'Git & GitHub',
      icon: 'assets/icons/github.svg',
      level: 'Comfortable – Version control & collaboration',
    },
  ];

	ngOnInit() { }
}