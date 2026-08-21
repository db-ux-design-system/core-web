import {
	COLORS,
	DBBrand,
	DBButton,
	DBHeader,
	DBPage,
	DBSelect,
	DBSwitch,
	DENSITIES
} from '@components';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import useQuery from '../hooks/use-query';
import Navigation from './navigation';

export default function Page() {
	const { density, shell, color, setShell, setDensity, setColor } =
		useQuery();

	const [drawerOpen, setDrawerOpen] = useState(false);

	return (
		<DBPage
			variant="fixed"
			documentOverflow="auto"
			fadeIn
			header={
				<DBHeader
					drawerOpen={drawerOpen}
					onToggle={setDrawerOpen}
					brand={<DBBrand>Showcase</DBBrand>}
					metaNavigation={
						<>
							<DBSelect
								label="Density"
								variant="floating"
								value={density}
								onChange={(event) => {
									setDensity(event?.target?.value);
								}}>
								{DENSITIES.map((ton) => (
									<option
										key={`density-option-${ton}`}
										value={ton}>
										{ton}
									</option>
								))}
							</DBSelect>
							<DBSelect
								label="Color"
								variant="floating"
								value={color}
								onChange={(event) => {
									setColor(event?.target?.value);
								}}>
								{COLORS.map((col) => (
									<option
										key={`color-option-${col}`}
										value={col}>
										{col}
									</option>
								))}
							</DBSelect>
						</>
					}
					primaryAction={
						<DBButton
							icon="magnifying_glass"
							variant="ghost"
							noText>
							Search
						</DBButton>
					}
					secondaryAction={
						<>
							<DBSwitch
								checked={shell}
								onChange={() => {
									setShell(!shell);
								}}>
								Shell
							</DBSwitch>
						</>
					}>
					<Navigation />
				</DBHeader>
			}>
			<div data-density={density} className={`db-${color}`}>
				<Outlet />
			</div>
		</DBPage>
	);
}
