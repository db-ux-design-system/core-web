import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DBTextarea } from '@components';
import { WrapperComponent } from '../wrapper/wrapper.component';

@Component({
	selector: 'app-textareas',
	standalone: true,
	imports: [WrapperComponent, DBTextarea, FormsModule, ReactiveFormsModule],
	templateUrl: './textareas.component.html'
})
export class TextareasComponent {
	plain = 'test1';
	ngModel = 'test2';
	formControl: FormControl = new FormControl('test3');
	public handlePlainChange(event: Event | void) {
		if (!event) {
			return;
		}
		this.plain = (event.target as HTMLTextAreaElement).value;
	}
}
