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
			required(path.username, {
				message: 'Benutzername ist erforderlich'
			});
			minLength(path.username, 3, { message: 'Mindestens 3 Zeichen' });
			maxLength(path.username, 20, { message: 'Maximal 20 Zeichen' });

			required(path.email, { message: 'E-Mail ist erforderlich' });
			email(path.email, { message: 'Keine gültige E-Mail-Adresse' });

			required(path.password, {
				message: 'Ein Passwort ist erforderlich'
			});
			minLength(path.password, 8, { message: 'Mindestens 8 Zeichen' });
			pattern(path.password, /[A-Z]/v, {
				message: 'Mindestens ein Großbuchstabe'
			});

			min(path.age, 18, { message: 'Mindestalter: 18' });
			max(path.age, 120, { message: 'Maximalalter: 120' });

			required(path.country, { message: 'Land ist erforderlich' });

			required(path.bio, { message: 'Bio ist erforderlich' });
			minLength(path.bio, 10, { message: 'Mindestens 10 Zeichen' });
			maxLength(path.bio, 500, { message: 'Maximal 500 Zeichen' });

			pattern(path.website, /^https?:\/\//v, {
				message: 'Muss mit http(s):// beginnen'
			});

			validate(path.phone, ({ value }) => {
				const v = value();

				if (v !== '' && !/^\+?[\d][\d\s-]{6,}$/v.test(v)) {
					return {
						kind: 'invalidPhone',
						message: 'Keine gültige Telefonnummer'
					};
				}

				return null;
			});

			debounce(path.search, 300);

			disabled(path.city, ({ valueOf }) => valueOf(path.country) === '');

			readonly(path.email, () => false);

			hidden(
				path.phone,
				({ valueOf }) => valueOf(path.contactMethod) !== 'phone'
			);
		}
	);

	protected readonly cityOptions = [
		{ value: 'berlin', label: 'Berlin' },
		{ value: 'wien', label: 'Wien' },
		{ value: 'zuerich', label: 'Zürich' },
		{ value: 'muenchen', label: 'München' }
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
