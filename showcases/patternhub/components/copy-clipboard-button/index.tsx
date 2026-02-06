import { type MouseEvent, type ReactNode, useEffect, useState } from 'react';
import { DBButton, DBTooltip } from '../../../../packages/react-core-components/src/index';

export type CopyClipboardButtonProps = {
	name: string;
	children?: ReactNode;
	copyText: string;
};

const CopyClipboardButton = ({
	name,
	children,
	copyText
}: CopyClipboardButtonProps) => {
	const [justCopied, setJustCopied] = useState<boolean>(false);

	const onCopyButtonClick = async (event: MouseEvent<HTMLButtonElement>) => {
		event.stopPropagation();

		if (typeof navigator !== 'undefined') {
			setJustCopied(true);
			await navigator.clipboard.writeText(copyText);
		}
	};

	useEffect(() => {
		let timeout: ReturnType<typeof setTimeout> | undefined;

		if (justCopied) {
			timeout = setTimeout(() => {
				setJustCopied(false);
			}, 1500);
		}

		return () => {
			clearTimeout(timeout);
		};
	}, [justCopied]);

	return (
		<DBButton
			variant="ghost"
			icon="copy"
			noText={true}
			onClick={onCopyButtonClick}
			aria-describedby={name}>
			<DBTooltip
				id={name}
				placement="top"
				style={{
					visibility: justCopied ? 'visible' : 'hidden'
				}}>
				{children}
			</DBTooltip>
		</DBButton>
	);
};

export default CopyClipboardButton;
