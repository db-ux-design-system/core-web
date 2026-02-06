import hljs from 'highlight.js';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
	Fragment,
	type PropsWithChildren,
	useCallback,
	useEffect,
	useState
} from 'react';
import {
	DBBrand,
	DBCard,
	DBHeader,
	DBIcon,
	DBPage,
	DBSection,
	DBSwitch,
	DBTooltip
} from '../../../packages/react-core-components/src';
import {
	getBreadcrumb,
	getNavigationList,
	type NavigationItem
} from '../data/routes';
import { FrameworkProvider } from './framework-context';
import FrameworkSwitcher from './framework-switcher';
import Navigation from './navigation';
import VersionSwitcher from './version-switcher';

const preferDark = '(prefers-color-scheme: dark)';
const colorModeKey = 'db-ux-mode';

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

	const [mode, setMode] = useState<boolean>(
		localStorage.getItem(colorModeKey) === null
			? globalThis.matchMedia?.(preferDark).matches
			: localStorage.getItem(colorModeKey) === 'dark'
	);

	const setColorMode = useCallback((dark: boolean) => {
		localStorage.setItem(colorModeKey, dark ? 'dark' : 'light');
		setMode(dark);
	}, []);

	useEffect(() => {
		globalThis
			.matchMedia(preferDark)
			.addEventListener('change', (event) => {
				setColorMode(event.matches);
			});
	}, []);

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
		<FrameworkProvider>
			{router.isReady && fullscreen && (
				<div
					className={`${noH1 ? 'noh1' : ''} ${properties ? 'is-properties' : ''}`}>
					{children}
				</div>
			)}
			{router.isReady && !fullscreen && (
				<DBPage
					data-mode={mode ? 'dark' : 'light'}
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
								<DBSwitch
									checked={mode}
									visualAid
									icon="sun"
									iconTrailing="moon"
									showLabel={false}
									onChange={() => {
										setColorMode(!mode);
									}}>
									<DBTooltip>
										Switch color scheme (light/dark)
									</DBTooltip>
									Switch color scheme (light/dark)
								</DBSwitch>
							}
							secondaryAction={
								<>
									<FrameworkSwitcher />
									<VersionSwitcher />
								</>
							}>
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
										<DBCard behavior="interactive">
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
										<DBCard behavior="interactive">
											<small>Next</small>
											<span data-icon-trailing="arrow_right">
												{nextNavigationItem.label}
											</span>
										</DBCard>
									</Link>
								)}
							</DBSection>
						)}
				</DBPage>
			)}
		</FrameworkProvider>
	);
};

export default dynamic(async () => DefaultPage, {
	ssr: false
});
