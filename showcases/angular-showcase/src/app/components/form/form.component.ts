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
