import {
	DBButton,
	DBDivider,
	DBIcon,
	DBInfotext,
	DBPopover
} from '../../../../output/react/src/index';
import CopyClipboardButton from '../copy-clipboard-button';

export type IconCodeSnippetProps = {
	iconName: string;
	weight: string;
	family: string;
};

const IconCodeSnippet = ({
	iconName,
	weight,
	family
}: IconCodeSnippetProps) => {
	// Generate code snippets for different configurations
	const generateSnippet = (
		variant: 'before' | 'after',
		withWeight: boolean,
		withFamily: boolean
	) => {
		const parts: string[] = [];

		if (variant === 'before') {
			parts.push(`data-icon="${iconName}"`);
			if (withWeight) {
				parts.push(`data-icon-weight="${weight}"`);
			}

			if (withFamily && family !== 'default') {
				parts.push(`data-icon-variant="${family}"`);
			}
		} else {
			parts.push(`data-icon-trailing="${iconName}"`);
			if (withWeight) {
				parts.push(`data-icon-weight-after="${weight}"`);
			}

			if (withFamily && family !== 'default') {
				parts.push(`data-icon-variant-after="${family}"`);
			}
		}

		return `<span ${parts.join(' ')}>Text</span>`;
	};

	const snippets = [
		{
			title: 'Icon Before (Basic)',
			code: generateSnippet('before', false, false)
		},
		{
			title: `Icon Before (weight: ${weight}px)`,
			code: generateSnippet('before', true, false)
		},
		{
			title: `Icon Before (weight: ${weight}px, family: ${family})`,
			code: generateSnippet('before', true, true)
		},
		{
			title: 'Icon After (Basic)',
			code: generateSnippet('after', false, false)
		},
		{
			title: `Icon After (weight: ${weight}px)`,
			code: generateSnippet('after', true, false)
		},
		{
			title: `Icon After (weight: ${weight}px, family: ${family})`,
			code: generateSnippet('after', true, true)
		}
	];

	return (
		<DBPopover
			placement="top"
			width="fixed"
			delay="slow"
			trigger={
				<>
					<DBIcon icon={iconName}>{iconName}</DBIcon>
					<DBInfotext semantic="informational" icon="none">
						{iconName}
					</DBInfotext>
				</>
			}>
			<DBButton
				slot="trigger"
				variant="ghost"
				icon="code"
				noText={true}
				aria-label={`Show code examples for ${iconName}`}
			/>
			<div className="icon-code-snippet-container">
				<div className="icon-code-snippet-header">
					<strong>{iconName}</strong>
				</div>
				<DBDivider />
				<div className="icon-code-snippet-content">
					{snippets.map((snippet, index) => (
						<div key={index} className="snippet-item">
							<div className="snippet-title">
								<DBIcon icon={iconName}>{iconName}</DBIcon>
								{snippet.title}
							</div>
							<div className="snippet-code-container">
								<code className="snippet-code">
									{snippet.code}
								</code>
								<CopyClipboardButton
									name={`copy-snippet-${iconName}-${index}`}
									copyText={snippet.code}>
									Copied to clipboard
								</CopyClipboardButton>
							</div>
						</div>
					))}
				</div>
			</div>
		</DBPopover>
	);
};

export default IconCodeSnippet;
