import { TestBed, inject } from '@angular/core/testing';

import { LandingPageComponent } from './landing-page.component';

describe('a landing-page component', () => {
	let component: LandingPageComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				LandingPageComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([LandingPageComponent], (LandingPageComponent) => {
		component = LandingPageComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});