import { Component, signal } from '@angular/core';
import {
	DBButton,
	DBCheckbox,
	DBDrawer,
	DBInfotext,
	DBRadio,
	DBSwitch,
	DBTabItem,
	DBTabList,
	DBTabPanel,
	DBTabs,
	DBTag
} from '@components';
import { SignalFormsComponent } from './signal-forms/db-ux-signal-forms';

@Component({
	selector: 'app-form',
	templateUrl: './form.component.html',
	imports: [
		DBRadio,
		DBTag,
		DBCheckbox,
		DBButton,
		DBTabs,
		DBTabList,
		DBTabItem,
		DBTabPanel,
		DBSwitch,
		DBDrawer,
		DBInfotext,
		SignalFormsComponent
	],
	standalone: true
})
export class FormComponent {
	// Drawer state
	drawerOpen = false;

	// Switch with signals
	checkedSignal = signal(false);

	handleSwitchChange(event: Event | void) {
		if (!event) return;
		this.checkedSignal.set((event.target as HTMLInputElement).checked);
	}
}
