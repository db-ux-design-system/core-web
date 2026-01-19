import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBInfotext from '../../infotext/infotext.lite';
import DBNavigationItem from '../../navigation-item/navigation-item.lite';
import DBNavigation from '../navigation.lite';
import { StorybookNavigationArgTypes } from './_navigation.arg.types';

useMetadata({
	storybookTitle: 'Density',
	storybookNames: ['Functional', '(Default) Regular', 'Expressive'],
	storybookArgTypes: StorybookNavigationArgTypes
});

export default function NavigationDensity() {
	return (
		<Fragment>
			<div class="fit-content-container" data-density="functional">
				<DBInfotext
					id="functional"
					size="small"
					semantic="informational"
					icon="none">
					Functional
				</DBInfotext>
				<DBNavigation
					data-density="functional"
					aria-labelledby="functional">
					<DBNavigationItem
						subNavigation={
							<>
								<DBNavigationItem
									subNavigation={
										<>
											<DBNavigationItem>
												<a href="#" aria-current="page">
													Sub-Sub-Navi-Item 1
												</a>
											</DBNavigationItem>
											<DBNavigationItem>
												<a href="#">
													Sub-Sub-Navi-Item 2
												</a>
											</DBNavigationItem>
										</>
									}>
									Sub-Navi-Item 1
								</DBNavigationItem>
								<DBNavigationItem>
									<a href="#">Sub-Navi-Item 2</a>
								</DBNavigationItem>
							</>
						}>
						Navi-Item 1
					</DBNavigationItem>
					<DBNavigationItem icon="x_placeholder">
						<a href="#">Navi-Item 2</a>
					</DBNavigationItem>
					<DBNavigationItem disabled>
						<a href="#">Navi-Item 3</a>
					</DBNavigationItem>
				</DBNavigation>
			</div>
			<div class="fit-content-container" data-density="regular">
				<DBInfotext
					id="_default__regular"
					size="small"
					semantic="informational"
					icon="none">
					(Default) Regular
				</DBInfotext>
				<DBNavigation
					data-density="regular"
					aria-labelledby="_default__regular">
					<DBNavigationItem
						subNavigation={
							<>
								<DBNavigationItem
									subNavigation={
										<>
											<DBNavigationItem>
												<a href="#" aria-current="page">
													Sub-Sub-Navi-Item 1
												</a>
											</DBNavigationItem>
											<DBNavigationItem>
												<a href="#">
													Sub-Sub-Navi-Item 2
												</a>
											</DBNavigationItem>
										</>
									}>
									Sub-Navi-Item 1
								</DBNavigationItem>
								<DBNavigationItem>
									<a href="#">Sub-Navi-Item 2</a>
								</DBNavigationItem>
							</>
						}>
						Navi-Item 1
					</DBNavigationItem>
					<DBNavigationItem icon="x_placeholder">
						<a href="#">Navi-Item 2</a>
					</DBNavigationItem>
					<DBNavigationItem disabled>
						<a href="#">Navi-Item 3</a>
					</DBNavigationItem>
				</DBNavigation>
			</div>
			<div class="fit-content-container" data-density="expressive">
				<DBInfotext
					id="expressive"
					size="small"
					semantic="informational"
					icon="none">
					Expressive
				</DBInfotext>
				<DBNavigation
					data-density="expressive"
					aria-labelledby="expressive">
					<DBNavigationItem
						subNavigation={
							<>
								<DBNavigationItem
									subNavigation={
										<>
											<DBNavigationItem>
												<a href="#" aria-current="page">
													Sub-Sub-Navi-Item 1
												</a>
											</DBNavigationItem>
											<DBNavigationItem>
												<a href="#">
													Sub-Sub-Navi-Item 2
												</a>
											</DBNavigationItem>
										</>
									}>
									Sub-Navi-Item 1
								</DBNavigationItem>
								<DBNavigationItem>
									<a href="#">Sub-Navi-Item 2</a>
								</DBNavigationItem>
							</>
						}>
						Navi-Item 1
					</DBNavigationItem>
					<DBNavigationItem icon="x_placeholder">
						<a href="#">Navi-Item 2</a>
					</DBNavigationItem>
					<DBNavigationItem disabled>
						<a href="#">Navi-Item 3</a>
					</DBNavigationItem>
				</DBNavigation>
			</div>
		</Fragment>
	);
}
