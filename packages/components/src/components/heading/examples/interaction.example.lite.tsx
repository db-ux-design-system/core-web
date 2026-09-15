import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBBadge from '../../badge/badge.lite';
import DBCustomButton from '../../custom-button/custom-button.lite';
import DBIcon from '../../icon/icon.lite';
import DBCustomHeading from '../custom-heading.lite';
import DBHeadingH1 from '../heading-h1.lite';
import DBHeadingH6 from '../heading-h6.lite';
import { StorybookHeadingArgTypes } from './_heading.arg.types';

useMetadata({
	storybookTitle: 'Interaction',
	// There is no `DBHeading` export (only the six native levels plus
	// DBCustomHeading), so the story's reference component must be named
	// explicitly - same as every other heading example, see
	// docs/creating-examples.md.
	storybookComponentName: 'DBHeadingH1',
	storybookNames: ['Interaction'],
	storybookArgTypes: StorybookHeadingArgTypes
});

/**
 Fixtures for the cross-framework interaction e2e tests
 (see showcases/e2e/heading/heading-interaction.spec.ts).
 
 Covers the structural invariants documented in
 packages/components/AGENTS.md: native tag semantics, attribute forwarding
 (incl. the Vue `class` alias), and the DBCustomHeading contract (no heading
 role/level of its own, row layout with the slots as siblings, no gap for an
 empty slot, slot content stays out of the accessible heading name).
 
 Only the first block becomes the 'Interaction' story (storybookNames has a
 * single entry); the rest are e2e-only scenarios and excluded from story
 * generation via data-sb-ignore. They still render in the showcase/e2e
 * output.
 */
export default function HeadingInteraction() {
	return (
		<Fragment>
			<DBHeadingH1 data-testid="native-h1">Native H1</DBHeadingH1>

			<DBHeadingH6
				data-sb-ignore="true"
				data-testid="forwarded-h6"
				className="custom-h6"
				aria-label="Accessible h6"
				data-forwarded="h6"
				title="Title h6">
				Forwarded
			</DBHeadingH6>

			{/* The Vue output aliases `class` to `className`, so this is only
			 * meaningful there - see
			 * showcases/e2e/heading/heading-interaction.spec.ts. */}
			<DBHeadingH6
				data-sb-ignore="true"
				data-testid="class-alias-h6"
				class="class-alias">
				Class alias
			</DBHeadingH6>

			<DBCustomHeading
				data-sb-ignore="true"
				data-testid="plain-custom-heading">
				<h2>Nested heading</h2>
			</DBCustomHeading>

			<DBCustomHeading
				data-sb-ignore="true"
				data-testid="slotted-custom-heading"
				startSlot={<span data-testid="start-slot">Section</span>}
				endSlot={
					<button data-testid="end-slot" type="button">
						More options
					</button>
				}>
				<h2>Installation</h2>
			</DBCustomHeading>

			<DBCustomHeading
				data-sb-ignore="true"
				data-testid="icon-custom-heading"
				startSlot={
					<DBIcon data-testid="nested-icon" icon="x_placeholder" />
				}>
				<h2>Icon heading</h2>
			</DBCustomHeading>
			<DBIcon
				data-sb-ignore="true"
				data-testid="reference-icon"
				icon="x_placeholder"
			/>

			<DBCustomHeading
				data-sb-ignore="true"
				data-testid="badge-custom-heading"
				endSlot={
					<DBBadge
						data-testid="nested-badge"
						semantic="critical"
						emphasis="strong">
						3
					</DBBadge>
				}>
				<h2>Badge heading</h2>
			</DBCustomHeading>
			<DBBadge
				data-sb-ignore="true"
				data-testid="reference-badge"
				semantic="critical"
				emphasis="strong">
				3
			</DBBadge>

			<DBCustomHeading
				data-sb-ignore="true"
				data-testid="button-custom-heading"
				endSlot={
					<DBCustomButton
						data-testid="nested-button"
						variant="ghost"
						icon="more_vertical"
						noText={true}>
						<button type="button">More options</button>
					</DBCustomButton>
				}>
				<h2>Button heading</h2>
			</DBCustomHeading>
			<DBCustomButton
				data-sb-ignore="true"
				data-testid="reference-button"
				variant="ghost"
				icon="more_vertical"
				noText={true}>
				<button type="button">More options</button>
			</DBCustomButton>
		</Fragment>
	);
}
