import { Fragment, useMetadata, useTarget } from '@builder.io/mitosis';
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
					{...useTarget({
						angular: {
							'data-x': 'workaround-angular'
						},
						default: {}
					})}
					aria-labelledby="functional">
					<DBNavigationItem
						text="Navi-Item 1"
						subNavigation={
							<>
								<DBNavigationItem
									text="Sub-Navi-Item 1"
									subNavigation={
										<>
											<DBNavigationItem text="Sub-Sub-Navi-Item 1"></DBNavigationItem>
											<DBNavigationItem text="Sub-Sub-Navi-Item 2"></DBNavigationItem>
										</>
									}></DBNavigationItem>
								<DBNavigationItem text="Sub-Navi-Item 2"></DBNavigationItem>
							</>
						}></DBNavigationItem>
					<DBNavigationItem
						icon="x_placeholder"
						text="Navi-Item 2"></DBNavigationItem>
					<DBNavigationItem
						disabled
						text="Navi-Item 3"></DBNavigationItem>
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
					{...useTarget({
						angular: {
							'data-x': 'workaround-angular'
						},
						default: {}
					})}
					aria-labelledby="_default__regular">
					<DBNavigationItem
						text="Navi-Item 1"
						subNavigation={
							<>
								<DBNavigationItem
									text="Sub-Navi-Item 1"
									subNavigation={
										<>
											<DBNavigationItem text="Sub-Sub-Navi-Item 1"></DBNavigationItem>
											<DBNavigationItem text="Sub-Sub-Navi-Item 2"></DBNavigationItem>
										</>
									}></DBNavigationItem>
								<DBNavigationItem text="Sub-Navi-Item 2"></DBNavigationItem>
							</>
						}></DBNavigationItem>
					<DBNavigationItem
						icon="x_placeholder"
						text="Navi-Item 2"></DBNavigationItem>
					<DBNavigationItem
						disabled
						text="Navi-Item 3"></DBNavigationItem>
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
					{...useTarget({
						angular: {
							'data-x': 'workaround-angular'
						},
						default: {}
					})}
					aria-labelledby="expressive">
					<DBNavigationItem
						text="Navi-Item 1"
						subNavigation={
							<>
								<DBNavigationItem
									text="Sub-Navi-Item 1"
									subNavigation={
										<>
											<DBNavigationItem text="Sub-Sub-Navi-Item 1"></DBNavigationItem>
											<DBNavigationItem text="Sub-Sub-Navi-Item 2"></DBNavigationItem>
										</>
									}></DBNavigationItem>
								<DBNavigationItem text="Sub-Navi-Item 2"></DBNavigationItem>
							</>
						}></DBNavigationItem>
					<DBNavigationItem
						icon="x_placeholder"
						text="Navi-Item 2"></DBNavigationItem>
					<DBNavigationItem
						disabled
						text="Navi-Item 3"></DBNavigationItem>
				</DBNavigation>
			</div>
		</Fragment>
	);
}
