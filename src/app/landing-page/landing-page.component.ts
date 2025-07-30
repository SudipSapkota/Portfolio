import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'landing-page',
	templateUrl: 'landing-page.component.html',
	 styleUrls: ['./landing-page.component.scss'] 
})

export class LandingPageComponent implements OnInit {
	  particles: Array<{x: number, y: number, delay: number}> = [];
  private particleInterval: any;
	constructor(
		private router: Router,

	) { }

	ngOnInit() { }

	onaboutmeClicked() : void {
		this.router.navigate(['/about-me']);
	}
}