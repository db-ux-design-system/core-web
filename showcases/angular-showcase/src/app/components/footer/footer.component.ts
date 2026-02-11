import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DBFooter } from '../../../../../../output/angular/src';
import defaultComponentVariants from '../../../../../shared/footer.json';
import { environment } from '../../../environments/environment';
import { DefaultComponent } from '../default.component';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	imports: environment.webComponents
		? [DefaultComponent]
		: [DefaultComponent, DBFooter],
	schemas: environment.webComponents ? [CUSTOM_ELEMENTS_SCHEMA] : [],
	standalone: true
})
export class FooterComponent {
	variants = defaultComponentVariants;
}
