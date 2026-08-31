import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBButton from '../../button/button.lite';
import DBControlPanelActions1 from '../../control-panel-actions/control-panel-actions-1.lite';
import DBControlPanelActions2 from '../../control-panel-actions/control-panel-actions-2.lite';
import DBControlPanelBrand from '../../control-panel-brand/control-panel-brand.lite';
import DBControlPanelDesktop from '../../control-panel-desktop/control-panel-desktop.lite';
import DBControlPanelMeta from '../../control-panel-meta/control-panel-meta.lite';
import DBControlPanelMobile from '../../control-panel-mobile/control-panel-mobile.lite';
import DBControlPanelNavigationItemGroup from '../../control-panel-navigation-item-group/control-panel-navigation-item-group.lite';
import DBControlPanelNavigationItem from '../../control-panel-navigation-item/control-panel-navigation-item.lite';
import DBControlPanelNavigation from '../../control-panel-navigation/control-panel-navigation.lite';
import DBLink from '../../link/link.lite';
import DBShellContent from '../../shell-content/shell-content.lite';
import DBShell from '../shell.lite';
import { StorybookShellArgTypes } from './_shell.arg.types';

useMetadata({
	storybookTitle: 'Deep Navigation',
	storybookNames: ['Top', 'Left'],
	storybookArgTypes: StorybookShellArgTypes
});

export default function ShellDeepNavigation() {
	return (
		<Fragment>
			<div style={{ width: '100%', display: 'block' }}>
				<DBShell
					data-test-id="shell-deep-nav-top"
					controlPanelDesktopPosition="top">
					<DBControlPanelDesktop
						brand={<DBControlPanelBrand data-logo="db-systel" />}
						meta={
							<DBControlPanelMeta>
								<DBLink href="#">Imprint</DBLink>
								<DBLink href="#">Help</DBLink>
							</DBControlPanelMeta>
						}
						actions1={
							<DBControlPanelActions1>
								<DBButton
									icon="magnifying_glass"
									variant="ghost"
									noText>
									Search
								</DBButton>
							</DBControlPanelActions1>
						}
						actions2={
							<DBControlPanelActions2>
								<DBButton
									icon="x_placeholder"
									variant="ghost"
									noText>
									Profile
								</DBButton>
							</DBControlPanelActions2>
						}>
						<DBControlPanelNavigation aria-label="shell-deep-nav-top">
							<DBControlPanelNavigationItemGroup
								icon="x_placeholder"
								text="Level 1a">
								<DBControlPanelNavigationItemGroup text="Level 2a">
									<DBControlPanelNavigationItemGroup text="Level 3a">
										<DBControlPanelNavigationItem>
											<a href="#" aria-current="page">
												Level 4a
											</a>
										</DBControlPanelNavigationItem>
										<DBControlPanelNavigationItem>
											<a href="#">Level 4b</a>
										</DBControlPanelNavigationItem>
										<DBControlPanelNavigationItem>
											<a href="#">Level 4c</a>
										</DBControlPanelNavigationItem>
									</DBControlPanelNavigationItemGroup>
									<DBControlPanelNavigationItemGroup text="Level 3b">
										<DBControlPanelNavigationItem>
											<a href="#">Level 4d</a>
										</DBControlPanelNavigationItem>
										<DBControlPanelNavigationItem>
											<a href="#">Level 4e</a>
										</DBControlPanelNavigationItem>
									</DBControlPanelNavigationItemGroup>
									<DBControlPanelNavigationItem>
										<a href="#">Level 3c</a>
									</DBControlPanelNavigationItem>
								</DBControlPanelNavigationItemGroup>
								<DBControlPanelNavigationItemGroup text="Level 2b">
									<DBControlPanelNavigationItem>
										<a href="#">Level 3d</a>
									</DBControlPanelNavigationItem>
									<DBControlPanelNavigationItem>
										<a href="#">Level 3e</a>
									</DBControlPanelNavigationItem>
								</DBControlPanelNavigationItemGroup>
								<DBControlPanelNavigationItem>
									<a href="#">Level 2c</a>
								</DBControlPanelNavigationItem>
							</DBControlPanelNavigationItemGroup>
							<DBControlPanelNavigationItemGroup
								icon="x_placeholder"
								text="Level 1b">
								<DBControlPanelNavigationItemGroup text="Level 2d">
									<DBControlPanelNavigationItemGroup text="Level 3f">
										<DBControlPanelNavigationItem>
											<a href="#">Level 4f</a>
										</DBControlPanelNavigationItem>
										<DBControlPanelNavigationItem>
											<a href="#">Level 4g</a>
										</DBControlPanelNavigationItem>
									</DBControlPanelNavigationItemGroup>
									<DBControlPanelNavigationItem>
										<a href="#">Level 3g</a>
									</DBControlPanelNavigationItem>
								</DBControlPanelNavigationItemGroup>
								<DBControlPanelNavigationItem>
									<a href="#">Level 2e</a>
								</DBControlPanelNavigationItem>
							</DBControlPanelNavigationItemGroup>
							<DBControlPanelNavigationItem
								icon="x_placeholder"
								tooltip="Simple Item">
								<a href="#">Simple Item</a>
							</DBControlPanelNavigationItem>
						</DBControlPanelNavigation>
					</DBControlPanelDesktop>
					<DBControlPanelMobile
						drawerHeaderText="Deep Nav Top"
						brand={<DBControlPanelBrand data-logo="db-systel" />}
						actions1={
							<DBControlPanelActions1>
								<DBButton
									icon="magnifying_glass"
									variant="ghost"
									noText>
									Search
								</DBButton>
							</DBControlPanelActions1>
						}
						actions2={
							<DBControlPanelActions2>
								<DBButton
									icon="x_placeholder"
									variant="ghost"
									noText>
									Profile
								</DBButton>
							</DBControlPanelActions2>
						}>
						<DBControlPanelNavigation aria-label="shell-deep-nav-top-mobile">
							<DBControlPanelNavigationItemGroup text="Level 1a">
								<DBControlPanelNavigationItemGroup text="Level 2a">
									<DBControlPanelNavigationItem>
										<a href="#" aria-current="page">
											Level 3a
										</a>
									</DBControlPanelNavigationItem>
									<DBControlPanelNavigationItem>
										<a href="#">Level 3b</a>
									</DBControlPanelNavigationItem>
								</DBControlPanelNavigationItemGroup>
								<DBControlPanelNavigationItem>
									<a href="#">Level 2b</a>
								</DBControlPanelNavigationItem>
							</DBControlPanelNavigationItemGroup>
							<DBControlPanelNavigationItem>
								<a href="#">Level 1b</a>
							</DBControlPanelNavigationItem>
						</DBControlPanelNavigation>
					</DBControlPanelMobile>
					<DBShellContent
						mainId="main-content-deep-nav-top"
						mainLabel="shell-deep-nav-top">
						<p>Deep Navigation - Top Position</p>
						<DBButton>Action</DBButton>
					</DBShellContent>
				</DBShell>
			</div>
			<div style={{ width: '100%', display: 'block' }}>
				<DBShell
					data-test-id="shell-deep-nav-left"
					controlPanelDesktopPosition="left">
					<DBControlPanelDesktop
						brand={<DBControlPanelBrand data-logo="db-systel" />}
						meta={
							<DBControlPanelMeta>
								<DBLink href="#">Imprint</DBLink>
								<DBLink href="#">Help</DBLink>
							</DBControlPanelMeta>
						}
						actions1={
							<DBControlPanelActions1>
								<DBButton
									icon="magnifying_glass"
									variant="ghost"
									noText>
									Search
								</DBButton>
							</DBControlPanelActions1>
						}
						actions2={
							<DBControlPanelActions2>
								<DBButton
									icon="x_placeholder"
									variant="ghost"
									noText>
									Profile
								</DBButton>
							</DBControlPanelActions2>
						}>
						<DBControlPanelNavigation aria-label="shell-deep-nav-left">
							<DBControlPanelNavigationItemGroup
								icon="x_placeholder"
								text="Group A">
								<DBControlPanelNavigationItemGroup text="Group A Sub">
									<DBControlPanelNavigationItem>
										<a href="#" aria-current="page">
											Item A-Sub-1
										</a>
									</DBControlPanelNavigationItem>
									<DBControlPanelNavigationItem>
										<a href="#">Item A-Sub-2</a>
									</DBControlPanelNavigationItem>
									<DBControlPanelNavigationItem>
										<a href="#">Item A-Sub-3</a>
									</DBControlPanelNavigationItem>
									<DBControlPanelNavigationItem>
										<a href="#">Item A-Sub-4</a>
									</DBControlPanelNavigationItem>
									<DBControlPanelNavigationItem>
										<a href="#">Item A-Sub-5</a>
									</DBControlPanelNavigationItem>
									<DBControlPanelNavigationItem>
										<a href="#">Item A-Sub-6</a>
									</DBControlPanelNavigationItem>
									<DBControlPanelNavigationItem>
										<a href="#">Item A-Sub-7</a>
									</DBControlPanelNavigationItem>
									<DBControlPanelNavigationItem>
										<a href="#">Item A-Sub-8</a>
									</DBControlPanelNavigationItem>
									<DBControlPanelNavigationItem>
										<a href="#">Item A-Sub-9</a>
									</DBControlPanelNavigationItem>
									<DBControlPanelNavigationItem>
										<a href="#">Item A-Sub-10</a>
									</DBControlPanelNavigationItem>
									<DBControlPanelNavigationItem>
										<a href="#">Item A-Sub-11</a>
									</DBControlPanelNavigationItem>
									<DBControlPanelNavigationItem>
										<a href="#">Item A-Sub-12</a>
									</DBControlPanelNavigationItem>
									<DBControlPanelNavigationItem>
										<a href="#">Item A-Sub-13</a>
									</DBControlPanelNavigationItem>
									<DBControlPanelNavigationItem>
										<a href="#">Item A-Sub-14</a>
									</DBControlPanelNavigationItem>
									<DBControlPanelNavigationItem>
										<a href="#">Item A-Sub-15</a>
									</DBControlPanelNavigationItem>
								</DBControlPanelNavigationItemGroup>
								<DBControlPanelNavigationItem>
									<a href="#">Item A-1</a>
								</DBControlPanelNavigationItem>
								<DBControlPanelNavigationItem>
									<a href="#">Item A-2</a>
								</DBControlPanelNavigationItem>
								<DBControlPanelNavigationItem>
									<a href="#">Item A-3</a>
								</DBControlPanelNavigationItem>
								<DBControlPanelNavigationItem>
									<a href="#">Item A-4</a>
								</DBControlPanelNavigationItem>
								<DBControlPanelNavigationItem>
									<a href="#">Item A-5</a>
								</DBControlPanelNavigationItem>
								<DBControlPanelNavigationItem>
									<a href="#">Item A-6</a>
								</DBControlPanelNavigationItem>
								<DBControlPanelNavigationItem>
									<a href="#">Item A-7</a>
								</DBControlPanelNavigationItem>
								<DBControlPanelNavigationItem>
									<a href="#">Item A-8</a>
								</DBControlPanelNavigationItem>
								<DBControlPanelNavigationItem>
									<a href="#">Item A-9</a>
								</DBControlPanelNavigationItem>
								<DBControlPanelNavigationItem>
									<a href="#">Item A-10</a>
								</DBControlPanelNavigationItem>
								<DBControlPanelNavigationItem>
									<a href="#">Item A-11</a>
								</DBControlPanelNavigationItem>
								<DBControlPanelNavigationItem>
									<a href="#">Item A-12</a>
								</DBControlPanelNavigationItem>
								<DBControlPanelNavigationItem>
									<a href="#">Item A-13</a>
								</DBControlPanelNavigationItem>
								<DBControlPanelNavigationItem>
									<a href="#">Item A-14</a>
								</DBControlPanelNavigationItem>
							</DBControlPanelNavigationItemGroup>
							<DBControlPanelNavigationItemGroup
								icon="x_placeholder"
								text="Group B">
								<DBControlPanelNavigationItemGroup text="Group B Sub">
									<DBControlPanelNavigationItem>
										<a href="#">Item B-Sub-1</a>
									</DBControlPanelNavigationItem>
									<DBControlPanelNavigationItem>
										<a href="#">Item B-Sub-2</a>
									</DBControlPanelNavigationItem>
									<DBControlPanelNavigationItem>
										<a href="#">Item B-Sub-3</a>
									</DBControlPanelNavigationItem>
									<DBControlPanelNavigationItem>
										<a href="#">Item B-Sub-4</a>
									</DBControlPanelNavigationItem>
									<DBControlPanelNavigationItem>
										<a href="#">Item B-Sub-5</a>
									</DBControlPanelNavigationItem>
									<DBControlPanelNavigationItem>
										<a href="#">Item B-Sub-6</a>
									</DBControlPanelNavigationItem>
									<DBControlPanelNavigationItem>
										<a href="#">Item B-Sub-7</a>
									</DBControlPanelNavigationItem>
									<DBControlPanelNavigationItem>
										<a href="#">Item B-Sub-8</a>
									</DBControlPanelNavigationItem>
									<DBControlPanelNavigationItem>
										<a href="#">Item B-Sub-9</a>
									</DBControlPanelNavigationItem>
									<DBControlPanelNavigationItem>
										<a href="#">Item B-Sub-10</a>
									</DBControlPanelNavigationItem>
									<DBControlPanelNavigationItem>
										<a href="#">Item B-Sub-11</a>
									</DBControlPanelNavigationItem>
									<DBControlPanelNavigationItem>
										<a href="#">Item B-Sub-12</a>
									</DBControlPanelNavigationItem>
									<DBControlPanelNavigationItem>
										<a href="#">Item B-Sub-13</a>
									</DBControlPanelNavigationItem>
									<DBControlPanelNavigationItem>
										<a href="#">Item B-Sub-14</a>
									</DBControlPanelNavigationItem>
									<DBControlPanelNavigationItem>
										<a href="#">Item B-Sub-15</a>
									</DBControlPanelNavigationItem>
								</DBControlPanelNavigationItemGroup>
								<DBControlPanelNavigationItem>
									<a href="#">Item B-1</a>
								</DBControlPanelNavigationItem>
								<DBControlPanelNavigationItem>
									<a href="#">Item B-2</a>
								</DBControlPanelNavigationItem>
								<DBControlPanelNavigationItem>
									<a href="#">Item B-3</a>
								</DBControlPanelNavigationItem>
								<DBControlPanelNavigationItem>
									<a href="#">Item B-4</a>
								</DBControlPanelNavigationItem>
								<DBControlPanelNavigationItem>
									<a href="#">Item B-5</a>
								</DBControlPanelNavigationItem>
								<DBControlPanelNavigationItem>
									<a href="#">Item B-6</a>
								</DBControlPanelNavigationItem>
								<DBControlPanelNavigationItem>
									<a href="#">Item B-7</a>
								</DBControlPanelNavigationItem>
								<DBControlPanelNavigationItem>
									<a href="#">Item B-8</a>
								</DBControlPanelNavigationItem>
								<DBControlPanelNavigationItem>
									<a href="#">Item B-9</a>
								</DBControlPanelNavigationItem>
								<DBControlPanelNavigationItem>
									<a href="#">Item B-10</a>
								</DBControlPanelNavigationItem>
								<DBControlPanelNavigationItem>
									<a href="#">Item B-11</a>
								</DBControlPanelNavigationItem>
								<DBControlPanelNavigationItem>
									<a href="#">Item B-12</a>
								</DBControlPanelNavigationItem>
								<DBControlPanelNavigationItem>
									<a href="#">Item B-13</a>
								</DBControlPanelNavigationItem>
								<DBControlPanelNavigationItem>
									<a href="#">Item B-14</a>
								</DBControlPanelNavigationItem>
							</DBControlPanelNavigationItemGroup>
							<DBControlPanelNavigationItemGroup
								icon="x_placeholder"
								text="Group C">
								<DBControlPanelNavigationItemGroup text="Group C Sub">
									<DBControlPanelNavigationItem>
										<a href="#">Item C-Sub-1</a>
									</DBControlPanelNavigationItem>
									<DBControlPanelNavigationItem>
										<a href="#">Item C-Sub-2</a>
									</DBControlPanelNavigationItem>
									<DBControlPanelNavigationItem>
										<a href="#">Item C-Sub-3</a>
									</DBControlPanelNavigationItem>
									<DBControlPanelNavigationItem>
										<a href="#">Item C-Sub-4</a>
									</DBControlPanelNavigationItem>
									<DBControlPanelNavigationItem>
										<a href="#">Item C-Sub-5</a>
									</DBControlPanelNavigationItem>
									<DBControlPanelNavigationItem>
										<a href="#">Item C-Sub-6</a>
									</DBControlPanelNavigationItem>
									<DBControlPanelNavigationItem>
										<a href="#">Item C-Sub-7</a>
									</DBControlPanelNavigationItem>
									<DBControlPanelNavigationItem>
										<a href="#">Item C-Sub-8</a>
									</DBControlPanelNavigationItem>
									<DBControlPanelNavigationItem>
										<a href="#">Item C-Sub-9</a>
									</DBControlPanelNavigationItem>
									<DBControlPanelNavigationItem>
										<a href="#">Item C-Sub-10</a>
									</DBControlPanelNavigationItem>
									<DBControlPanelNavigationItem>
										<a href="#">Item C-Sub-11</a>
									</DBControlPanelNavigationItem>
									<DBControlPanelNavigationItem>
										<a href="#">Item C-Sub-12</a>
									</DBControlPanelNavigationItem>
									<DBControlPanelNavigationItem>
										<a href="#">Item C-Sub-13</a>
									</DBControlPanelNavigationItem>
									<DBControlPanelNavigationItem>
										<a href="#">Item C-Sub-14</a>
									</DBControlPanelNavigationItem>
									<DBControlPanelNavigationItem>
										<a href="#">Item C-Sub-15</a>
									</DBControlPanelNavigationItem>
								</DBControlPanelNavigationItemGroup>
								<DBControlPanelNavigationItem>
									<a href="#">Item C-1</a>
								</DBControlPanelNavigationItem>
								<DBControlPanelNavigationItem>
									<a href="#">Item C-2</a>
								</DBControlPanelNavigationItem>
								<DBControlPanelNavigationItem>
									<a href="#">Item C-3</a>
								</DBControlPanelNavigationItem>
								<DBControlPanelNavigationItem>
									<a href="#">Item C-4</a>
								</DBControlPanelNavigationItem>
								<DBControlPanelNavigationItem>
									<a href="#">Item C-5</a>
								</DBControlPanelNavigationItem>
								<DBControlPanelNavigationItem>
									<a href="#">Item C-6</a>
								</DBControlPanelNavigationItem>
								<DBControlPanelNavigationItem>
									<a href="#">Item C-7</a>
								</DBControlPanelNavigationItem>
								<DBControlPanelNavigationItem>
									<a href="#">Item C-8</a>
								</DBControlPanelNavigationItem>
								<DBControlPanelNavigationItem>
									<a href="#">Item C-9</a>
								</DBControlPanelNavigationItem>
								<DBControlPanelNavigationItem>
									<a href="#">Item C-10</a>
								</DBControlPanelNavigationItem>
								<DBControlPanelNavigationItem>
									<a href="#">Item C-11</a>
								</DBControlPanelNavigationItem>
								<DBControlPanelNavigationItem>
									<a href="#">Item C-12</a>
								</DBControlPanelNavigationItem>
								<DBControlPanelNavigationItem>
									<a href="#">Item C-13</a>
								</DBControlPanelNavigationItem>
								<DBControlPanelNavigationItem>
									<a href="#">Item C-14</a>
								</DBControlPanelNavigationItem>
							</DBControlPanelNavigationItemGroup>
							<DBControlPanelNavigationItemGroup
								icon="x_placeholder"
								text="Group D">
								<DBControlPanelNavigationItemGroup text="Group D Sub">
									<DBControlPanelNavigationItem>
										<a href="#">Item D-Sub-1</a>
									</DBControlPanelNavigationItem>
									<DBControlPanelNavigationItem>
										<a href="#">Item D-Sub-2</a>
									</DBControlPanelNavigationItem>
									<DBControlPanelNavigationItem>
										<a href="#">Item D-Sub-3</a>
									</DBControlPanelNavigationItem>
									<DBControlPanelNavigationItem>
										<a href="#">Item D-Sub-4</a>
									</DBControlPanelNavigationItem>
									<DBControlPanelNavigationItem>
										<a href="#">Item D-Sub-5</a>
									</DBControlPanelNavigationItem>
									<DBControlPanelNavigationItem>
										<a href="#">Item D-Sub-6</a>
									</DBControlPanelNavigationItem>
									<DBControlPanelNavigationItem>
										<a href="#">Item D-Sub-7</a>
									</DBControlPanelNavigationItem>
									<DBControlPanelNavigationItem>
										<a href="#">Item D-Sub-8</a>
									</DBControlPanelNavigationItem>
									<DBControlPanelNavigationItem>
										<a href="#">Item D-Sub-9</a>
									</DBControlPanelNavigationItem>
									<DBControlPanelNavigationItem>
										<a href="#">Item D-Sub-10</a>
									</DBControlPanelNavigationItem>
									<DBControlPanelNavigationItem>
										<a href="#">Item D-Sub-11</a>
									</DBControlPanelNavigationItem>
									<DBControlPanelNavigationItem>
										<a href="#">Item D-Sub-12</a>
									</DBControlPanelNavigationItem>
									<DBControlPanelNavigationItem>
										<a href="#">Item D-Sub-13</a>
									</DBControlPanelNavigationItem>
									<DBControlPanelNavigationItem>
										<a href="#">Item D-Sub-14</a>
									</DBControlPanelNavigationItem>
									<DBControlPanelNavigationItem>
										<a href="#">Item D-Sub-15</a>
									</DBControlPanelNavigationItem>
								</DBControlPanelNavigationItemGroup>
								<DBControlPanelNavigationItem>
									<a href="#">Item D-1</a>
								</DBControlPanelNavigationItem>
								<DBControlPanelNavigationItem>
									<a href="#">Item D-2</a>
								</DBControlPanelNavigationItem>
								<DBControlPanelNavigationItem>
									<a href="#">Item D-3</a>
								</DBControlPanelNavigationItem>
								<DBControlPanelNavigationItem>
									<a href="#">Item D-4</a>
								</DBControlPanelNavigationItem>
								<DBControlPanelNavigationItem>
									<a href="#">Item D-5</a>
								</DBControlPanelNavigationItem>
								<DBControlPanelNavigationItem>
									<a href="#">Item D-6</a>
								</DBControlPanelNavigationItem>
								<DBControlPanelNavigationItem>
									<a href="#">Item D-7</a>
								</DBControlPanelNavigationItem>
								<DBControlPanelNavigationItem>
									<a href="#">Item D-8</a>
								</DBControlPanelNavigationItem>
								<DBControlPanelNavigationItem>
									<a href="#">Item D-9</a>
								</DBControlPanelNavigationItem>
								<DBControlPanelNavigationItem>
									<a href="#">Item D-10</a>
								</DBControlPanelNavigationItem>
								<DBControlPanelNavigationItem>
									<a href="#">Item D-11</a>
								</DBControlPanelNavigationItem>
								<DBControlPanelNavigationItem>
									<a href="#">Item D-12</a>
								</DBControlPanelNavigationItem>
								<DBControlPanelNavigationItem>
									<a href="#">Item D-13</a>
								</DBControlPanelNavigationItem>
								<DBControlPanelNavigationItem>
									<a href="#">Item D-14</a>
								</DBControlPanelNavigationItem>
							</DBControlPanelNavigationItemGroup>
							<DBControlPanelNavigationItemGroup
								icon="x_placeholder"
								text="Group E">
								<DBControlPanelNavigationItemGroup text="Group E Sub">
									<DBControlPanelNavigationItem>
										<a href="#">Item E-Sub-1</a>
									</DBControlPanelNavigationItem>
									<DBControlPanelNavigationItem>
										<a href="#">Item E-Sub-2</a>
									</DBControlPanelNavigationItem>
									<DBControlPanelNavigationItem>
										<a href="#">Item E-Sub-3</a>
									</DBControlPanelNavigationItem>
									<DBControlPanelNavigationItem>
										<a href="#">Item E-Sub-4</a>
									</DBControlPanelNavigationItem>
									<DBControlPanelNavigationItem>
										<a href="#">Item E-Sub-5</a>
									</DBControlPanelNavigationItem>
									<DBControlPanelNavigationItem>
										<a href="#">Item E-Sub-6</a>
									</DBControlPanelNavigationItem>
									<DBControlPanelNavigationItem>
										<a href="#">Item E-Sub-7</a>
									</DBControlPanelNavigationItem>
									<DBControlPanelNavigationItem>
										<a href="#">Item E-Sub-8</a>
									</DBControlPanelNavigationItem>
									<DBControlPanelNavigationItem>
										<a href="#">Item E-Sub-9</a>
									</DBControlPanelNavigationItem>
									<DBControlPanelNavigationItem>
										<a href="#">Item E-Sub-10</a>
									</DBControlPanelNavigationItem>
									<DBControlPanelNavigationItem>
										<a href="#">Item E-Sub-11</a>
									</DBControlPanelNavigationItem>
									<DBControlPanelNavigationItem>
										<a href="#">Item E-Sub-12</a>
									</DBControlPanelNavigationItem>
									<DBControlPanelNavigationItem>
										<a href="#">Item E-Sub-13</a>
									</DBControlPanelNavigationItem>
									<DBControlPanelNavigationItem>
										<a href="#">Item E-Sub-14</a>
									</DBControlPanelNavigationItem>
									<DBControlPanelNavigationItem>
										<a href="#">Item E-Sub-15</a>
									</DBControlPanelNavigationItem>
								</DBControlPanelNavigationItemGroup>
								<DBControlPanelNavigationItem>
									<a href="#">Item E-1</a>
								</DBControlPanelNavigationItem>
								<DBControlPanelNavigationItem>
									<a href="#">Item E-2</a>
								</DBControlPanelNavigationItem>
								<DBControlPanelNavigationItem>
									<a href="#">Item E-3</a>
								</DBControlPanelNavigationItem>
								<DBControlPanelNavigationItem>
									<a href="#">Item E-4</a>
								</DBControlPanelNavigationItem>
								<DBControlPanelNavigationItem>
									<a href="#">Item E-5</a>
								</DBControlPanelNavigationItem>
								<DBControlPanelNavigationItem>
									<a href="#">Item E-6</a>
								</DBControlPanelNavigationItem>
								<DBControlPanelNavigationItem>
									<a href="#">Item E-7</a>
								</DBControlPanelNavigationItem>
								<DBControlPanelNavigationItem>
									<a href="#">Item E-8</a>
								</DBControlPanelNavigationItem>
								<DBControlPanelNavigationItem>
									<a href="#">Item E-9</a>
								</DBControlPanelNavigationItem>
								<DBControlPanelNavigationItem>
									<a href="#">Item E-10</a>
								</DBControlPanelNavigationItem>
								<DBControlPanelNavigationItem>
									<a href="#">Item E-11</a>
								</DBControlPanelNavigationItem>
								<DBControlPanelNavigationItem>
									<a href="#">Item E-12</a>
								</DBControlPanelNavigationItem>
								<DBControlPanelNavigationItem>
									<a href="#">Item E-13</a>
								</DBControlPanelNavigationItem>
								<DBControlPanelNavigationItem>
									<a href="#">Item E-14</a>
								</DBControlPanelNavigationItem>
							</DBControlPanelNavigationItemGroup>
							<DBControlPanelNavigationItem
								icon="x_placeholder"
								tooltip="Item 6">
								<a href="#">Item 6</a>
							</DBControlPanelNavigationItem>
							<DBControlPanelNavigationItem
								icon="x_placeholder"
								tooltip="Item 7">
								<a href="#">Item 7</a>
							</DBControlPanelNavigationItem>
							<DBControlPanelNavigationItem
								icon="x_placeholder"
								tooltip="Item 8">
								<a href="#">Item 8</a>
							</DBControlPanelNavigationItem>
							<DBControlPanelNavigationItem
								icon="x_placeholder"
								tooltip="Item 9">
								<a href="#">Item 9</a>
							</DBControlPanelNavigationItem>
							<DBControlPanelNavigationItem
								icon="x_placeholder"
								tooltip="Item 10">
								<a href="#">Item 10</a>
							</DBControlPanelNavigationItem>
							<DBControlPanelNavigationItem
								icon="x_placeholder"
								tooltip="Item 11">
								<a href="#">Item 11</a>
							</DBControlPanelNavigationItem>
							<DBControlPanelNavigationItem
								icon="x_placeholder"
								tooltip="Item 12">
								<a href="#">Item 12</a>
							</DBControlPanelNavigationItem>
							<DBControlPanelNavigationItem
								icon="x_placeholder"
								tooltip="Item 13">
								<a href="#">Item 13</a>
							</DBControlPanelNavigationItem>
							<DBControlPanelNavigationItem
								icon="x_placeholder"
								tooltip="Item 14">
								<a href="#">Item 14</a>
							</DBControlPanelNavigationItem>
							<DBControlPanelNavigationItem
								icon="x_placeholder"
								tooltip="Item 15">
								<a href="#">Item 15</a>
							</DBControlPanelNavigationItem>
						</DBControlPanelNavigation>
					</DBControlPanelDesktop>
					<DBControlPanelMobile
						drawerHeaderText="Deep Nav Left"
						brand={<DBControlPanelBrand data-logo="db-systel" />}
						actions1={
							<DBControlPanelActions1>
								<DBButton
									icon="magnifying_glass"
									variant="ghost"
									noText>
									Search
								</DBButton>
							</DBControlPanelActions1>
						}
						actions2={
							<DBControlPanelActions2>
								<DBButton
									icon="x_placeholder"
									variant="ghost"
									noText>
									Profile
								</DBButton>
							</DBControlPanelActions2>
						}>
						<DBControlPanelNavigation aria-label="shell-deep-nav-left-mobile">
							<DBControlPanelNavigationItemGroup text="Level 1a">
								<DBControlPanelNavigationItemGroup text="Level 2a">
									<DBControlPanelNavigationItem>
										<a href="#" aria-current="page">
											Level 3a
										</a>
									</DBControlPanelNavigationItem>
									<DBControlPanelNavigationItem>
										<a href="#">Level 3b</a>
									</DBControlPanelNavigationItem>
								</DBControlPanelNavigationItemGroup>
								<DBControlPanelNavigationItem>
									<a href="#">Level 2b</a>
								</DBControlPanelNavigationItem>
							</DBControlPanelNavigationItemGroup>
							<DBControlPanelNavigationItem>
								<a href="#">Level 1b</a>
							</DBControlPanelNavigationItem>
						</DBControlPanelNavigation>
					</DBControlPanelMobile>
					<DBShellContent
						mainId="main-content-deep-nav-left"
						mainLabel="shell-deep-nav-left">
						<p>Deep Navigation - Left Position</p>
						<DBButton>Action</DBButton>
					</DBShellContent>
				</DBShell>
			</div>
		</Fragment>
	);
}
