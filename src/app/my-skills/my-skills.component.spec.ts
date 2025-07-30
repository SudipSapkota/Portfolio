import { TestBed, inject } from '@angular/core/testing';

import { MySkillsComponent } from './my-skills.component';

describe('a my-skills component', () => {
	let component: MySkillsComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				MySkillsComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([MySkillsComponent], (MySkillsComponent) => {
		component = MySkillsComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});