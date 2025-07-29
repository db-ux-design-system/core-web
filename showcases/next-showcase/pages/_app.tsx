import {
	DBControlPanelBrand,
	DBControlPanelDesktop,
	DBShell
} from '@components';
import type { AppProps } from 'next/app';
import useQuery from '../../react-showcase/src/hooks/use-query';
import Navigation from '../../react-showcase/src/navigation';
import '../../showcase-styles.css';
import '../styles/global.scss';

const App = ({ Component, pageProps }: AppProps) => {
	const { density, color, fullscreen } = useQuery();

	if (fullscreen) {
		return (
			<div data-density={density} className={`db-${color}`}>
				<Component {...pageProps} />
			</div>
		);
	}

	return (
		<DBShell
			fadeIn
			controlPanelDesktop={
				<DBControlPanelDesktop
					brand={<DBControlPanelBrand>Showcase</DBControlPanelBrand>}>
					<Navigation />
				</DBControlPanelDesktop>
			}>
			<div data-density={density} className={`db-${color}`}>
				<Component {...pageProps} />
			</div>
		</DBShell>
	);
};

export default App;
