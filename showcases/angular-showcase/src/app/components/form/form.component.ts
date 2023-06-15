import { Component } from '@angular/core';

@Component({
	selector: 'app-form',
	templateUrl: './form.component.html'
})
export class FormComponent {
	input = '';
	array = ['X', 'Y', 'Z'];
	radio = '';
	tags: string[] = [];
	// fieldset checkbox state
	checked = [true, true];

	select = '';
	checkbox = '';
	dataList = [{ key: 'test', value: 'Test' }, { key: 'test2' }];

	getRadioName = (radioName: string): string => `Radio ${radioName}`;

	getTagName = (tag: string): string => `Tag ${tag}`;

	getTags = (): string => JSON.stringify(this.tags);

	changeTags = (tag: string) => {
		this.tags = this.tags.includes(tag)
			? this.tags.filter((t) => t !== tag)
			: [...this.tags, tag];
	};

	// checkbox changes
	handleChange1 = (event?: any) => {
		console.log(event);
		this.checked = [event.target.checked, event.target.checked];
	};

	handleChange2 = (event: any) => {
		this.checked = [event.target.checked, this.checked[1]];
	};

	handleChange3 = (event: any) => {
		this.checked = [this.checked[0], event.target.checked];
	};

	showValues(): void {
		// eslint-disable-next-line no-alert
		alert(
			JSON.stringify({
				input: this.input,
				radio: this.radio,
				select: this.select,
				checkbox: this.checkbox,
				tags: this.tags
			})
		);
	}
}
