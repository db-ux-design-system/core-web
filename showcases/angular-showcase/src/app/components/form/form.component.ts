import { Component, NO_ERRORS_SCHEMA, signal } from '@angular/core';
import { form, FormField, required } from '@angular/forms/signals';
import {
	DBButton,
	DBCheckbox,
	DBDivider,
	DBDrawer,
	DBInfotext,
	DBInput,
	DBRadio,
	DBSelect,
	DBSwitch,
	DBTabItem,
	DBTabList,
	DBTabPanel,
	DBTabs,
	DBTag,
	DBTextarea
} from '@components';

type FormData = {
	input: string;
	dateinput: string;
	textarea: string;
	checkbox: boolean;
	select: string;
};

@Component({
	selector: 'app-form',
	templateUrl: './form.component.html',
	imports: [
		DBInput,
		DBTextarea,
		DBSelect,
		DBRadio,
		DBTag,
		DBCheckbox,
		DBDivider,
		DBButton,
		DBTabs,
		DBTabList,
		DBTabItem,
		DBTabPanel,
		DBSwitch,
		DBDrawer,
		DBInfotext,
		FormField
	],
	standalone: true,
	// NO_ERRORS_SCHEMA required for Angular 21 [formField] directive template type-checking.
	// Remove when Angular 22 is the minimum supported version.
	schemas: [NO_ERRORS_SCHEMA]
})
export class FormComponent {
	// Drawer state
	drawerOpen = false;

	// Switch with signals
	checkedSignal = signal(false);

	array = ['X', 'Y', 'Z'];
	tags: string[] = [];
	radio = signal('X');

	// Fieldset checkbox state
	checked = [true, false];

	dataList = [{ value: 'test', label: 'Test' }, { value: 'test2' }];

	// Signal Forms: model signal + form()
	formModel = signal<FormData>({
		input: 'Filled with Signal Forms',
		dateinput: '2024-05-04',
		textarea: 'Filled with Signal Forms as well',
		checkbox: true,
		select: 'test2'
	});

	myForm = form(this.formModel, (fields) => {
		required(fields.input);
		required(fields.textarea);
	});

	getRadioName = (radioName: string): string => `Radio ${radioName}`;
	getTagName = (tag: string): string => `Tag ${tag}`;
	getTags = (): string => JSON.stringify(this.tags);

	changeTags = (tag: string) => {
		this.tags = this.tags.includes(tag)
			? this.tags.filter((t) => t !== tag)
			: [...this.tags, tag];
	};

	resetValues(): void {
		this.formModel.set({
			input: '',
			dateinput: '',
			textarea: '',
			checkbox: false,
			select: ''
		});
		this.radio.set('');
	}

	onFormSubmit(): void {
		// eslint-disable-next-line no-alert
		alert('Signal Forms value: ' + JSON.stringify(this.formModel()));
	}

	// Checkbox changes (indeterminate demo)
	handleChange1 = (event?: Event | void) => {
		if (!event) return;
		const c = (event.target as HTMLInputElement)?.checked;
		this.checked = [c, c];
	};

	handleChange2 = (event: Event | void) => {
		if (!event) return;
		this.checked = [
			(event.target as HTMLInputElement).checked,
			this.checked[1]
		];
	};

	handleChange3 = (event: Event | void) => {
		if (!event) return;
		this.checked = [
			this.checked[0],
			(event.target as HTMLInputElement).checked
		];
	};

	handleSwitchChange(event: Event | void) {
		if (!event) return;
		this.checkedSignal.set((event.target as HTMLInputElement).checked);
	}
}
