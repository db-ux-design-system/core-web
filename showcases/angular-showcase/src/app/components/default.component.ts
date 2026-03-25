import { CommonModule } from '@angular/common';
import {
	Component,
	CUSTOM_ELEMENTS_SCHEMA,
	Input,
	TemplateRef
} from '@angular/core';
import { DBCard, DBDivider } from '../../../../../output/angular/src';
import { environment } from '../../environments/environment';

type VariantExample = {
	name: string;
	className?: string;
	density?: string;
	style?: string;
	props?: Record<string, unknown>;
};

type Variant = {
	name: string;
	role?: string;
	examples: VariantExample[];
};

@Component({
	selector: 'app-default-component',
	templateUrl: './default.component.html',
	imports: environment.webComponents
		? [CommonModule]
		: [CommonModule, DBCard, DBDivider],
	standalone: true,
	schemas: environment.webComponents ? [CUSTOM_ELEMENTS_SCHEMA] : []
})
export class DefaultComponent {
	@Input() title?: string;
	@Input() variants: Variant[] = [];
	@Input() exampleTemplate?: TemplateRef<unknown>;

	getElevation(): '1' {
		return '1';
	}

	getLink(exampleName: string): string {
		if (globalThis.window === undefined) {
			return '';
		}

		const page = exampleName.replaceAll(' ', '+').toLowerCase();
		const {
			location: { hash }
		} = globalThis.window;
		const basePath = hash.includes('?') ? hash.split('?')[0] : hash;
		return `${basePath}?page=${page}`;
	}
}
