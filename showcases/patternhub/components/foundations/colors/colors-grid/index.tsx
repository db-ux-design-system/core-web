import checkerboard from '../../../../assets/images/checkerboard.png';
import CopyClipboardButton from '../../../copy-clipboard-button';
import { type ColorValue } from '../data';

const ColorsGrid = ({
	values,
	prefixClass,
	dataAttributeName,
	showCheckerboard,
	enableDarkMode,
	variant
}: {
	values: ColorValue[];
	prefixClass: string;
	dataAttributeName: string;
	showCheckerboard: boolean;
	enableDarkMode: boolean;
	variant: 'class' | 'dataAttribute';
}) => {
	const getText = (value: string) =>
		variant === 'class'
			? `${prefixClass}${value}`
			: `${dataAttributeName}="${value}"`;

	const getAttributes = (value: string) =>
		variant === 'class'
			? { className: `${prefixClass}${value}` }
			: { [dataAttributeName]: value };

	return (
		<div
			className="color-overview-container db-font-size-sm"
			data-color-scheme={enableDarkMode ? 'dark' : 'light'}>
			<span
				style={{
					backgroundImage: showCheckerboard
						? `url(${checkerboard.src})`
						: 'none'
				}}
			/>{' '}
			{values.map((value, index) => {
				const v = typeof value === 'string' ? value : value.value;
				const appendix =
					typeof value === 'string' ? undefined : value.appendix;
				return (
					<div {...getAttributes(v)}>
						<span>
							{getText(v)}
							{appendix}
						</span>
						<CopyClipboardButton
							name={`copy-button-${index}`}
							copyText={getText(v)}>
							Copied to clipboard
						</CopyClipboardButton>
					</div>
				);
			})}
		</div>
	);
};

export default ColorsGrid;
