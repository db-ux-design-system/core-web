// SPDX-FileCopyrightText: 2025 DB Systel GmbH
//
// SPDX-License-Identifier: Apache-2.0

import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { Fragment, type PropsWithChildren, useEffect, useState } from 'react';
import hljs from 'highlight.js';
import Link from 'next/link';
import {
	DBBrand,
	DBButton,
	DBHeader,
	DBPage,
	DBSection,
	DBCard,
	DBIcon
} from '../../../output/react/src';
import {
	getBreadcrumb,
	getNavigationList,
	type NavigationItem
} from '../data/routes';
import Navigation from './navigation';
import VersionSwitcher from './version-switcher';

const DefaultPage = ({
	children,
	noNavigation
}: PropsWithChildren<{ noNavigation?: boolean }>) => {
	const [fullscreen, setFullscreen] = useState<boolean>(false);
	const [noH1, setNoH1] = useState<boolean>(false);
	const [properties, setProperties] = useState<boolean>(false);
	const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
	const [lastScroll, setLastScroll] = useState<string>();
	const [previousNavigationItem, setPreviousNavigationItem] = useState<
		NavigationItem | undefined
	>();
	const [nextNavigationItem, setNextNavigationItem] = useState<
		NavigationItem | undefined
	>();
	const [breadcrumb, setBreadcrumb] = useState<NavigationItem[]>();
	const router = useRouter();

	useEffect(() => {
		hljs.configure({
			languages: [
				'js',
				'ts',
				'jsx',
				'tsx',
				'css',
				'scss',
				'html',
				'shell'
			]
		});
		hljs.highlightAll();
	}, []);

	useEffect(() => {
		if (router.query) {
			if (router.query.fullscreen) {
				setFullscreen(router.query.fullscreen === 'true');
			}

			if (router.query.page) {
				setFullscreen(true);
			}

			if (router.query.noh1) {
				setNoH1(router.query.noh1 === 'true');
			}

			if (router.query.properties) {
				setProperties(router.query.properties === 'true');
			}

			if (router.query.current) {
				const current: string = Array.isArray(router.query.current)
					? router.query.current[0]
					: router.query.current;
				if (lastScroll !== current) {
					setLastScroll(current);
					document
						.querySelector(`#${current}`)
						?.scrollIntoView({ behavior: 'smooth' });
				}
			}
		}

		const pathWithoutQuery = router.asPath.split('?')[0];

		const { previous, next } = getNavigationList(pathWithoutQuery);

		setPreviousNavigationItem(previous);
		setNextNavigationItem(next);
		setBreadcrumb(getBreadcrumb(pathWithoutQuery));
	}, [router]);

	return (
		<>
			{router.isReady && fullscreen && (
				<div
					className={`${noH1 ? 'noh1' : ''} ${
						properties ? 'is-properties' : ''
					}`}>
					{children}
				</div>
			)}
			{router.isReady && !fullscreen && (
				<DBPage
					fadeIn
					variant="fixed"
					header={
						<DBHeader
							drawerOpen={drawerOpen}
							onToggle={setDrawerOpen}
							brand={
								<DBBrand>
									{process.env.NEXT_PUBLIC_APP_NAME}
								</DBBrand>
							}
							primaryAction={
								<DBButton
									icon="magnifying_glass"
									variant="ghost"
									noText>
									Search
								</DBButton>
							}
							secondaryAction={<VersionSwitcher />}>
							<Navigation />
						</DBHeader>
					}>
					{breadcrumb && breadcrumb.length > 1 && (
						<DBSection spacing="none" width="large">
							<div
								data-density="functional"
								className="breadcrumb-container">
								{breadcrumb?.map((navItem) => (
									<Fragment
										key={`breadcrumb-${navItem.path}`}>
										{navItem.path !== '/' && (
											<DBIcon icon="chevron_right" />
										)}
										<Link
											className="db-button"
											data-variant="ghost"
											data-icon={
												navItem.path === '/'
													? 'house'
													: 'none'
											}
											data-no-text={navItem.path === '/'}
											href={navItem.path ?? '/'}>
											{navItem.label}
										</Link>
									</Fragment>
								))}
							</div>
						</DBSection>
					)}
					<DBSection spacing="none" width="large">
						{children}
					</DBSection>
					{!noNavigation &&
						(previousNavigationItem ?? nextNavigationItem) && (
							<DBSection
								width="large"
								spacing="small"
								className="link-containers">
								{previousNavigationItem && (
									<Link
										className="previous-link-container"
										href={
											previousNavigationItem.path ?? '/'
										}>
										<DBCard behaviour="interactive">
											<small>Previous</small>
											<span data-icon="arrow_left">
												{previousNavigationItem.label}
											</span>
										</DBCard>
									</Link>
								)}
								{nextNavigationItem && (
									<Link
										className="next-link-container"
										href={nextNavigationItem.path ?? '/'}>
										<DBCard behaviour="interactive">
											<small>Next</small>
											<span data-icon-after="arrow_right">
												{nextNavigationItem.label}
											</span>
										</DBCard>
									</Link>
								)}
							</DBSection>
						)}
				</DBPage>
			)}
		</>
	);
};

export default dynamic(async () => DefaultPage, {
	ssr: false
});
