import { TestBed, inject } from '@angular/core/testing';

import { MyProjectsComponent } from './my-projects.component';

describe('a my-projects component', () => {
	let component: MyProjectsComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				MyProjectsComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([MyProjectsComponent], (MyProjectsComponent) => {
		component = MyProjectsComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});