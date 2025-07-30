import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
	selector: 'about-me',
	templateUrl: 'about-me.component.html',
	styleUrls: ['about-me.component.scss'],
})

export class AboutMeComponent implements OnInit {
	constructor(private location: Location) {}

	ngOnInit() { }

	goBack(): void {
		this.location.back();
	}
}