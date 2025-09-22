export type Framework = 'angular' | 'html' | 'react' | 'vue';

export type FrameworkOption = {
	value: Framework;
	label: string;
};

export const FRAMEWORK_OPTIONS: FrameworkOption[] = [
	{ value: 'angular', label: 'Angular' },
	{ value: 'html', label: 'HTML' },
	{ value: 'react', label: 'React' },
	{ value: 'vue', label: 'Vue' }
];

export const DEFAULT_FRAMEWORK: Framework = 'react';
