import { JsonPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import {
	type FieldTree,
	FormField,
	debounce,
	disabled,
	email,
	form,
	hidden,
	max,
	maxLength,
	min,
	minLength,
	pattern,
	readonly,
	required,
	validate
} from '@angular/forms/signals';
import {
	DBButton,
	DBCheckbox,
	DBCustomSelect,
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

@Component({
	selector: 'app-form',
	templateUrl: './form.component.html',
	imports: [
		JsonPipe,
		FormField,
		DBInput,
		DBSelect,
		DBCustomSelect,
		DBTextarea,
		DBCheckbox,
		DBRadio,
		DBSwitch,
		DBTag,
		DBButton,
		DBTabs,
		DBTabList,
		DBTabItem,
		DBTabPanel,
		DBDrawer,
		DBInfotext
	],
	standalone: true
})
export class FormComponent {
	// Drawer state
	drawerOpen = false;

	// Switch with signals (standalone, not Signal Forms)
	checkedSignal = signal(false);

	// Signal Forms
	protected readonly userForm = form(
		signal({
			username: '',
			email: '',
			password: '',
			age: 0,
			birthday: '',
			appointmentTime: '',
			appointmentDateTime: '',
			website: '',
			phone: '',
			search: '',
			country: '',
			city: [] as string[],
			bio: '',
			newsletter: false,
			contactMethod: '',
			darkMode: false
		}),
		(path) => {
			required(path.username, { message: 'Username is required' });
			minLength(path.username, 3, { message: 'At least 3 characters' });
			maxLength(path.username, 20, { message: 'At most 20 characters' });

			required(path.email, { message: 'Email is required' });
			email(path.email, { message: 'Not a valid email address' });

			required(path.password, { message: 'Password is required' });
			minLength(path.password, 8, { message: 'At least 8 characters' });
			pattern(path.password, /[A-Z]/v, {
				message: 'At least one uppercase letter'
			});

			min(path.age, 18, { message: 'Minimum age: 18' });
			max(path.age, 120, { message: 'Maximum age: 120' });

			required(path.country, { message: 'Country is required' });

			required(path.bio, { message: 'Bio is required' });
			minLength(path.bio, 10, { message: 'At least 10 characters' });
			maxLength(path.bio, 500, { message: 'At most 500 characters' });

			// URL must start with http(s)://
			pattern(path.website, /^https?:\/\//v, {
				message: 'Must start with http(s)://'
			});

			validate(path.phone, ({ value }) => {
				const v = value();

				if (v !== '' && !/^\+?[\d][\d\s-]{6,}$/v.test(v)) {
					return {
						kind: 'invalidPhone',
						message: 'Not a valid phone number'
					};
				}

				return null;
			});

			// Debounce search input by 300ms
			debounce(path.search, 300);

			// City is disabled until a country is selected
			disabled(path.city, ({ valueOf }) => valueOf(path.country) === '');

			// Set to true to test readonly behaviour
			readonly(path.email, () => false);

			// Phone field is hidden unless contact method is "phone"
			hidden(
				path.phone,
				({ valueOf }) => valueOf(path.contactMethod) !== 'phone'
			);
		}
	);

	protected readonly cityOptions = [
		{ value: 'berlin', label: 'Berlin' },
		{ value: 'vienna', label: 'Vienna' },
		{ value: 'zurich', label: 'Zurich' },
		{ value: 'munich', label: 'Munich' }
	];

	/** Returns the Signal Forms validation state for a field after interaction. */
	protected fieldValidation<T>(
		field: FieldTree<T>
	): 'invalid' | 'valid' | 'no-validation' {
		if (field().dirty() && field().invalid() && !field().pending()) {
			return 'invalid';
		}

		if (field().dirty() && field().valid() && !field().pending()) {
			return 'valid';
		}

		return 'no-validation';
	}

	handleSwitchChange(event: Event | void) {
		if (!event) return;
		this.checkedSignal.set((event.target as HTMLInputElement).checked);
	}
}
