---
to: ../../output/power-apps/<%= name %>/DB<%= h.capitalize(name) %>/index.ts
force: true
---
<% if(typeof props !== 'undefined'){ locals.props = JSON.parse(Buffer.from(props, 'base64').toString('ascii')) }  -%>

import { IInputs, IOutputs } from "./generated/ManifestTypes";
import * as React from "react";
import * as ReactDOM from "react-dom";
import DB<%= h.capitalize(name) %>React from "./<%= name %>";
import { DB<%= h.capitalize(name) %>Props } from "./model";


const isDev = () => !!document.querySelector('[class="harness-root"]');
const getCanvasSizeElement = (height: boolean) => {
	const foundControl = document.getElementById(
		height ? 'control-height' : 'control-width'
	);
	let canvasSizeElement;
	if (foundControl) {
		const inputs = Array.from(foundControl.getElementsByTagName('input'));
		if (inputs.length > 0) {
			canvasSizeElement = inputs[0];
		}
	} else {
		const sizeGroups = document.querySelectorAll('input[id*="SizeGroup"]');
		if (sizeGroups.length > 1) {
			canvasSizeElement = sizeGroups[height ? 1 : 0];
		}
	}

	if (canvasSizeElement) {
		return canvasSizeElement as HTMLInputElement;
	}

	return undefined;
};

const changeCanvasSize = (element: any, size: number, isDev: boolean) => {
	const keys = Object.keys(element);
	if (keys) {
		if (isDev) {
			const foundReactPropsKey = keys.find((key) =>
				key.includes('__reactProps')
			);
			if (foundReactPropsKey) {
				element[foundReactPropsKey].onChange({
					target: { value: (size + 1).toString() }
				});
			}
		} else {
			const foundEventHandlersKey = keys.find((key) =>
				key.includes('__reactEventHandlers')
			);

			if (foundEventHandlersKey) {
				element[foundEventHandlersKey].onBlur({
					currentTarget: { value: (size + 1).toString() }
				});
			}
		}
	}
};

export class DB<%= h.capitalize(name) %>
  implements ComponentFramework.StandardControl<IInputs, IOutputs>
{
  private overViewContainer: HTMLDivElement;
  private _notifyOutputChanged: () => void;
  private props: DB<%= h.capitalize(name) %>Props = {
  };
  <% if(typeof hasOnClick !== 'undefined' && hasOnClick){ -%>
  private clicked: boolean;
  <% } -%>

	private isDev: boolean = isDev();
	private canvasWidthState = "<%= canvasWidth %>";
	private canvasHeightState = "<%= canvasHeight %>";
	private canvasWidthElement = getCanvasSizeElement(false);
	private canvasHeightElement = getCanvasSizeElement(true);

  constructor() {
  }


  public init(
    context: ComponentFramework.Context<IInputs>,
    notifyOutputChanged: () => void,
    state: ComponentFramework.Dictionary,
    container: HTMLDivElement
  ): void {
    let currentPageContext = context as any;
    currentPageContext = currentPageContext
      ? currentPageContext["page"]
      : undefined;
	<%  if(locals.props && Object.keys(locals.props).length){ -%>
    if (currentPageContext) {
		<%  locals.props.forEach((prop)=>{ -%>
		this.props.<%= prop.name %> = currentPageContext.<%= prop.powerAppsName || prop.name %>;
		<% }) -%>
    }
	<% } -%>
	this._notifyOutputChanged = notifyOutputChanged;
    this.overViewContainer = container;
    context.mode.trackContainerResize(true);
  }


  public updateView(context: ComponentFramework.Context<IInputs>): void {
	this.canvasWidthElement = getCanvasSizeElement(false);
	this.canvasHeightElement = getCanvasSizeElement(true);

    <%  if(locals.props){ locals.props.forEach((prop)=>{ -%>
    this.props.<%= prop.name %> = context.parameters.<%= prop.powerAppsName || prop.name %>.raw || undefined;
	<% if(typeof prop.onChange !== 'undefined' && prop.onChange){ -%>
	this.props.onChange = (event:any)=> {
	this.props.<%= prop.name %> = event?.target?.["<%= prop.onChange %>"] as unknown;
	this._notifyOutputChanged();
	};
    <% } -%>
    <% })} -%>
    <% if(typeof hasDisabledProp !== 'undefined' && hasDisabledProp){   -%>
	this.props.disabled = context.mode.isControlDisabled;
    <% } -%>
    <% if(typeof hasOnClick !== 'undefined' && hasOnClick){   -%>
	this.props.onClick = ()=> {
		this.clicked = true;
		this._notifyOutputChanged();
	};
    <% } -%>

    ReactDOM.render(
      React.createElement(DB<%= h.capitalize(name) %>React, this.props),
      this.overViewContainer
    );

		if (this.canvasHeightElement) {
			if (this.canvasHeightState === 'fixed') {
				changeCanvasSize(
					this.canvasHeightElement,
					this.overViewContainer.offsetHeight,
					this.isDev
				);
				this.canvasHeightElement.disabled = true;
				this.overViewContainer.style.height = 'fit-content';
			} else {
				this.canvasHeightElement.disabled = false;
				this.canvasHeightElement.type = 'number';
				// TODO: Add min size for this based on config
				this.overViewContainer.style.height = '100%';
			}
		}

		if (this.canvasWidthElement) {
			const unchangeable =
				this.canvasWidthState === 'fixed' ||
				(this.canvasWidthState === 'dynamic' &&
					(this.props as any)['width'] === 'auto');
			if (unchangeable) {
				changeCanvasSize(
					this.canvasWidthElement,
					this.overViewContainer.offsetWidth,
					this.isDev
				);
				this.canvasWidthElement.disabled = true;
				this.overViewContainer.style.width = 'fit-content';
			} else {
				this.canvasWidthElement.disabled = false;
				this.canvasHeightElement.type = 'number';
				// TODO: Add min size for this based on config
				this.overViewContainer.style.width = '100%';
			}
		}

	let shouldUpdate = false;

    <% if(typeof hasOnClick !== 'undefined' && hasOnClick){   -%>
	if (this.clicked) {
		this.clicked = false;
		shouldUpdate = true;
	}
    <% } -%>
	if (shouldUpdate) {
		this._notifyOutputChanged();
	}
  }

  public getOutputs(): IOutputs {
    return {
    <%  if(locals.props){ locals.props.filter(prop=>prop.onChange).forEach((prop)=>{ -%>
      <%= prop.name %>: this.props.<%= prop.name %>,
    <% })} -%>
    <% if(typeof hasOnClick !== 'undefined' && hasOnClick){   -%>
	clicked: this.clicked,
    <% } -%>
    };
  }

  public destroy(): void {
    ReactDOM.unmountComponentAtNode(this.overViewContainer);
  }
}



