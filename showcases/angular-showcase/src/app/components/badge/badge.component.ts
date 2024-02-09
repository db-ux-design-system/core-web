import { Component } from '@angular/core';
import { DBIcon } from '../../../../../../output/angular/src/components/icon/icon';
import { DBBadge } from '../../../../../../output/angular/src/components/badge/badge';
import defaultComponentVariants from '../../../../../shared/badge.json';
import { DefaultComponent } from '../default.component';
import { DBInfotext } from '../../../../../../output/angular/src/components/infotext';
import { DBButton } from '../../../../../../output/angular/src/components/button';

@Component({
	selector: 'app-badge',
	templateUrl: './badge.component.html',
	imports: [DefaultComponent, DBBadge, DBInfotext, DBButton, DBIcon],
	standalone: true
})
export class BadgeComponent {
	variants = defaultComponentVariants;
}
