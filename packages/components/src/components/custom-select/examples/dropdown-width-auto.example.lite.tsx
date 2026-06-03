import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBInfotext from '../../infotext/infotext.lite';
import DBCustomSelect from '../custom-select.lite';
import { StorybookCustomSelectArgTypes } from './_custom-select.arg.types';

useMetadata({
	storybookTitle: 'Dropdown Width Auto Edge Cases',
	storybookNames: [
		'Auto: Long option text (should not wrap)',
		'Auto: Wide trigger, short options (dropdown should match trigger width)',
		'Auto: Narrow trigger, long options (dropdown should grow beyond trigger)',
		'Auto: Mixed option lengths'
	],
	storybookArgTypes: StorybookCustomSelectArgTypes
});

export default function CustomSelectDropdownWidthAuto() {
	return (
		<Fragment>
			<DBInfotext
				data-sb-ignore="true"
				size="small"
				semantic="informational">
				Long option text with dropdownWidth=&quot;auto&quot; — text
				wraps instead of being truncated or keeping single line
			</DBInfotext>
			<i class="line-break" data-sb-ignore="true" />
			<div style={{ width: '300px' }}>
				<DBCustomSelect
					options={[
						{
							value: 'long-1',
							label: 'Dieser extrem lange Optionstext sollte eigentlich nicht umbrechen sondern sauber abgeschnitten werden',
							id: 'auto-long-1'
						},
						{
							value: 'long-2',
							label: 'Ein weiterer viel zu langer Text der das Dropdown sprengt und haesslich umbricht',
							id: 'auto-long-2'
						},
						{
							value: 'long-3',
							label: 'Kurz',
							id: 'auto-long-3'
						},
						{
							value: 'long-4',
							label: 'Frankfurt(Main)Hbf - Berlin Hauptbahnhof (tief) via Erfurt Hbf',
							id: 'auto-long-4'
						},
						{
							value: 'long-5',
							label: 'Muenchen Hbf Gleis 15 Abfahrt Richtung Stuttgart mit Umstieg in Augsburg',
							id: 'auto-long-5'
						}
					]}
					label="Auto: Long Options"
					formFieldWidth="full"
					dropdownWidth="auto"
					listLabel="auto-long-options"></DBCustomSelect>
			</div>

			<i class="line-break" data-sb-ignore="true" />

			<DBInfotext
				data-sb-ignore="true"
				size="small"
				semantic="informational">
				Wide trigger (400px) with short options and
				dropdownWidth=&quot;auto&quot; — dropdown should be at least as
				wide as the trigger
			</DBInfotext>
			<i class="line-break" data-sb-ignore="true" />
			<div style={{ width: '400px' }}>
				<DBCustomSelect
					options={[
						{
							value: 'A',
							id: 'auto-short-1'
						},
						{
							value: 'B',
							id: 'auto-short-2'
						},
						{
							value: 'C',
							id: 'auto-short-3'
						}
					]}
					label="Auto: Wide Trigger, Short Options"
					formFieldWidth="full"
					dropdownWidth="auto"
					listLabel="auto-wide-trigger-short-options"></DBCustomSelect>
			</div>

			<i class="line-break" data-sb-ignore="true" />

			<DBInfotext
				data-sb-ignore="true"
				size="small"
				semantic="informational">
				Narrow trigger (150px) with long options and
				dropdownWidth=&quot;auto&quot; — dropdown should grow to fit
				content but not exceed viewport
			</DBInfotext>
			<i class="line-break" data-sb-ignore="true" />
			<div style={{ width: '150px' }}>
				<DBCustomSelect
					options={[
						{
							value: 'narrow-long-1',
							label: 'Frankfurt(Main)Hbf nach Berlin Hbf',
							id: 'auto-narrow-long-1'
						},
						{
							value: 'narrow-long-2',
							label: 'Hamburg-Altona via Hannover Hbf',
							id: 'auto-narrow-long-2'
						},
						{
							value: 'narrow-long-3',
							label: 'Koeln Messe/Deutz (tief)',
							id: 'auto-narrow-long-3'
						}
					]}
					label="Auto: Narrow Trigger"
					formFieldWidth="full"
					dropdownWidth="auto"
					listLabel="auto-narrow-trigger-long-options"></DBCustomSelect>
			</div>

			<i class="line-break" data-sb-ignore="true" />

			<DBInfotext
				data-sb-ignore="true"
				size="small"
				semantic="informational">
				Mixed option lengths with dropdownWidth=&quot;auto&quot; —
				dropdown width should accommodate the longest option
			</DBInfotext>
			<i class="line-break" data-sb-ignore="true" />
			<div style={{ width: '250px' }}>
				<DBCustomSelect
					options={[
						{
							value: 'mix-1',
							label: 'OK',
							id: 'auto-mix-1'
						},
						{
							value: 'mix-2',
							label: 'Mittellanger Optionstext hier',
							id: 'auto-mix-2'
						},
						{
							value: 'mix-3',
							label: 'Dieser Optionstext ist deutlich laenger als alle anderen und sollte die Breite bestimmen',
							id: 'auto-mix-3'
						},
						{
							value: 'mix-4',
							label: 'Kurz',
							id: 'auto-mix-4'
						}
					]}
					label="Auto: Mixed Lengths"
					formFieldWidth="full"
					dropdownWidth="auto"
					listLabel="auto-mixed-lengths"></DBCustomSelect>
			</div>
		</Fragment>
	);
}
