#!/usr/bin/env node
import { v005_v006 } from './migration/v0.0.5-v0.0.6.ts';

export type ProgrammOptionsType = {
	name: string;
	short?: string;
	long?: string;
	array?: boolean;
	required?: boolean;
	description?: string;
	defaultValue?: string | boolean | string[];
};

export type OptionsType = {
	src: string;
	type: Array<
		string | 'colorQ32024' | 'iconQ32024' | 'v005_v006' | 'v006_v007'
	>;
	dryRun?: string | boolean;
};
