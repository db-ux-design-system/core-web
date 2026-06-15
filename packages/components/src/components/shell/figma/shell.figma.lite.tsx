import { useMetadata } from '@builder.io/mitosis';
import DBControlPanelDesktop from '../../control-panel-desktop/control-panel-desktop.lite';
import { DBShell } from '../index';
import { FigmaShellProps, shells } from './shell.figma';

useMetadata({
	figma: shells
});

export default function ShellFigmaLite(props: FigmaShellProps) {
	return (
		<DBShell
			controlPanelDesktopPosition={props.controlPanelDesktopPosition}
			controlPanelDesktop={
				<DBControlPanelDesktop>
					DBControlPanel Desktop
				</DBControlPanelDesktop>
			}>
			{props._children}
		</DBShell>
	);
}
