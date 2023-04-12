import { Component } from '@angular/core';
import defaultComponentVariants from '../../../../../shared/infotext.json';

@Component({
	selector: 'app-infotext',
	templateUrl: './infotext.component.html'
})
export class InfotextComponent {
	variants = defaultComponentVariants;
}
