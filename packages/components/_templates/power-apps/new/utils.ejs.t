---
to: ../../output/power-apps/<%= name %>/DB<%= h.capitalize(name) %>/utils.ts
force: true
---
const isDev = () => !!document.querySelector('[class="harness-root"]');
const isProdEditor = () => document.querySelector('[class="studio web"]');
const getControlSideBar = () =>
	document.querySelector(
		isDev() ? '[class="io-pane"]' : '[id="control-sidebar"]'
	);

export const initMutationObserver = async () => {
	if (isDev() || isProdEditor()) {
		let initCanvasTries = 0;
		let element: Element | null = null;
		while (!element && initCanvasTries < 5) {
			element = getControlSideBar();
			initCanvasTries++;
			if (element) {
				await new Promise((resolve) => setTimeout(resolve, 200));
			}
		}

		if (element && !element.hasAttribute('mutation-observer')) {
			const config = {
				childList: true,
				subtree: true
			};
			const callback = (mutationList: MutationRecord[]) => {
				// SideBar has a change try to find the canvasSize Elements
				startCustomControlProcess();
			};
			const observer = new MutationObserver(callback);
			observer.observe(element, config);
			element.setAttribute('mutation-observer', 'true');
			startCustomControlProcess();
		}
	}
};

const isDBUIElementSelected = () => {
	const sideBarDBUIInputs =
		getControlSideBar()?.querySelectorAll('[id*="DBUI"]');
	const currentSelectedControlContent = document.getElementById(
		'currentSelectedControl'
	)?.textContent;

	if (sideBarDBUIInputs && currentSelectedControlContent) {
		return (
			currentSelectedControlContent.includes('DBUI') &&
			sideBarDBUIInputs.length > 0
		);
	}

	return false;
};

export const startCustomControlProcess = () => {
		if (isDev() || isProdEditor()) {
			if (isDev() || isDBUIElementSelected()) {
			let customControl;

			if (isDev()) {
				customControl = document.querySelector('[class*="customControl"]');
			} else {
				const selectedContainers = getSelectedContainers();
				if (selectedContainers?.length >= 2) {
					customControl = selectedContainers[0].querySelector(
						'[class*="customControl"]'
					);
				}
			}

			if (customControl) {
				const canvasHeightState = customControl.getAttribute(
					'data-canvas-height-state'
				);
				const canvasWidthState = customControl.getAttribute(
					'data-canvas-width-state'
				);
				handleCanvasSize(
					customControl,
					canvasHeightState,
					canvasWidthState
				);
			}
		} else {
			const canvasSizeElements = getCanvasSizeElements();
			if (canvasSizeElements?.length === 2) {
				const canvasWidthElement = canvasSizeElements[0];
				const canvasHeightElement = canvasSizeElements[1];
				if (canvasHeightElement) {
					canvasHeightElement.disabled = false;
				}
				if (canvasWidthElement) {
					canvasWidthElement.disabled = false;
				}
			}
		}
	}
};

const getReactEventHandlers = (element: any): any | undefined => {
	const keys = Object.keys(element);
	const foundEventHandlersKey = keys.find((key) =>
		key.includes('__reactEventHandlers')
	);
	if (foundEventHandlersKey) {
		return element[foundEventHandlersKey];
	}

	return undefined;
};

const getSelectedContainers = (): any => {
	const selectedContainer: any = document.querySelector(
		'[class*="selectedAdornersContainer"]'
	);

	if (selectedContainer) {
		const foundEventHandlers = getReactEventHandlers(selectedContainer);
		if (foundEventHandlers) {
			const dataControlId = foundEventHandlers['data-control-id'];
			return document.querySelectorAll(
				`[data-control-id="${dataControlId}"]`
			);
		}
	}

	return undefined;
};

const changeCanvasSize = (element: any, size: number) => {
	const keys = Object.keys(element);
	if (keys) {
		if (isDev()) {
			const foundReactPropsKey = keys.find((key) =>
				key.includes('__reactProps')
			);
			if (foundReactPropsKey) {
				element[foundReactPropsKey].onChange({
					target: { value: (size + 1).toString() }
				});
			}
		} else {
			const foundEventHandlers = getReactEventHandlers(element);

			if (foundEventHandlers) {
				foundEventHandlers.onBlur({
					currentTarget: { value: size.toString() }
				});
			}
		}
	}
};

const getCanvasSizeElements = (): HTMLInputElement[] => {
	const devControlContainer = document.getElementById('control-dimensions');
	let inputs;
	if (devControlContainer) {
		inputs = Array.from(devControlContainer.getElementsByTagName('input'));
	} else {
		inputs = document.querySelectorAll('input[id*="SizeGroup"]');
	}

	return inputs as HTMLInputElement[];
};

const handleCanvasSize = (
	customControl: any,
	canvasHeightState: string,
	canvasWidthState: string
): void => {
	const canvasSizeElements = getCanvasSizeElements();
	if (canvasSizeElements?.length === 2) {
		const canvasWidthElement = canvasSizeElements[0];
		const canvasHeightElement = canvasSizeElements[1];

		if (canvasHeightElement) {
			if (canvasHeightState !== 'fixed') {
				canvasHeightElement.disabled = false;
				canvasHeightElement.type = 'number';
				// TODO: Add min size for this based on config
				customControl.style.height = '100%';
			} else {
				customControl.style.height = 'fit-content';
				changeCanvasSize(
					canvasHeightElement,
					customControl.offsetHeight
				);
				canvasHeightElement.disabled = true;
				//hideResizers(true);
			}
		}

		if (canvasWidthElement) {
			const unchangeable =
				canvasWidthState === 'fixed' ||
				(canvasWidthState === 'dynamic' &&
					customControl.querySelector('[data-width="auto"]'));
			if (unchangeable) {
				customControl.style.width = 'fit-content';
				changeCanvasSize(canvasWidthElement, customControl.offsetWidth);
				canvasWidthElement.disabled = true;
				//hideResizers(false);
			} else {
				canvasWidthElement.disabled = false;
				canvasWidthElement.type = 'number';
				// TODO: Add min size for this based on config
				customControl.style.width = '100%';
			}
		}
	}
};

/*const hideResizers = (isHeight: boolean) => {
	if (isProdEditor()) {
		const resizers = document.querySelectorAll("[class^='resizerCommon']");

		if (resizers?.length === 8) {
			Array.from(resizers)
				.filter((_, index: number) => {
					if (isHeight) {
						return index !== 2 && index !== 3;
					} else {
						return index !== 0 && index !== 1;
					}
				})
				.forEach((resizer) => resizer.setAttribute('hidden', ''));
		}
	}
};*/

export default { initMutationObserver, startCustomControlProcess };
