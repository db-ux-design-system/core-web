import { Fragment, useMetadata, useTarget } from '@builder.io/mitosis';
import DBBrand from '../../brand/brand.lite';
import DBNavigationItem from '../../navigation-item/navigation-item.lite';
import DBNavigation from '../../navigation/navigation.lite';
import DBHeader from '../header.lite';
import { StorybookHeaderArgTypes } from './_header.arg.types';

useMetadata({
	storybookTitle: 'Examples',
	storybookNames: [
		'With Application Name + Navigation',
		'Without Navigation',
		'Without Application Name',
		'Without Application Name + Navigation'
	],
	storybookArgTypes: StorybookHeaderArgTypes
});

export default function HeaderExamples() {
	return (
		<Fragment>
			<div style={{ width: '100%', display: 'block' }}>
				<DBHeader brand={<DBBrand>DBHeader</DBBrand>}>
					<DBNavigation
						{...useTarget({
							angular: {
								'data-x': 'workaround-angular'
							},
							default: {}
						})}
						aria-label="With Application Name + Navigation">
						<DBNavigationItem icon="x_placeholder">
							<a href="#">With Application Name + Navigation</a>
						</DBNavigationItem>
						<DBNavigationItem disabled>
							<a href="#">
								With Application Name + Navigation disabled
							</a>
						</DBNavigationItem>
					</DBNavigation>
				</DBHeader>
			</div>
			<div style={{ width: '100%', display: 'block' }}>
				<DBHeader brand={<DBBrand>DBHeader</DBBrand>}></DBHeader>
			</div>
			<div style={{ width: '100%', display: 'block' }}>
				<DBHeader brand={<DBBrand></DBBrand>}>
					<DBNavigation
						{...useTarget({
							angular: {
								'data-x': 'workaround-angular'
							},
							default: {}
						})}
						aria-label="Without Application Name">
						<DBNavigationItem icon="x_placeholder">
							<a href="#">Without Application Name</a>
						</DBNavigationItem>
						<DBNavigationItem disabled>
							<a href="#">Without Application Name disabled</a>
						</DBNavigationItem>
					</DBNavigation>
				</DBHeader>
			</div>
			<div style={{ width: '100%', display: 'block' }}>
				<DBHeader brand={<DBBrand></DBBrand>}></DBHeader>
			</div>
		</Fragment>
	);
}
