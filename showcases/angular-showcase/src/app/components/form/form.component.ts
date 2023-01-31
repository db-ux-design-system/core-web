import { Component, type OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
	selector: 'app-form',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
	input = '';
	checkbox = false;
	radio = '';
	select = '';
	textarea = '';
	toggle = false;

	checkboxControl = new FormControl();
	radioControl = new FormControl();
	selectControl = new FormControl();
	textareaControl = new FormControl();

	radioButtons = ['Radio 01', 'Radio 02', 'Radio 03'];

	ngOnInit(): void {
		this.checkboxControl.valueChanges.subscribe((value) => {
			this.checkbox = value;
		});
		this.radioControl.valueChanges.subscribe((value) => {
			this.radio = value;
		});
		this.selectControl.valueChanges.subscribe((value) => {
			this.select = value;
		});
		this.textareaControl.valueChanges.subscribe((value) => {
			this.textarea = value;
		});
	}

	showValues(): void {
		// eslint-disable-next-line no-alert
		alert(
			JSON.stringify({
				input: this.input,
				checkbox: this.checkbox,
				radio: this.radio,
				select: this.select,
				textarea: this.textarea,
				toggle: this.toggle
			})
		);
	}
}
