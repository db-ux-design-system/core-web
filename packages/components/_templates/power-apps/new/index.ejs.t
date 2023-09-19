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
import { initMutationObserver, startCustomControlProcess } from "./utils";

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

	private canvasWidthState = "<%= canvasWidth %>";
	private canvasHeightState = "<%= canvasHeight %>";

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
    context.mode.trackContainerResize(true);
	this._notifyOutputChanged = notifyOutputChanged;
    this.overViewContainer = container;
    this.overViewContainer.setAttribute(
			'data-canvas-height-state',
			this.canvasHeightState
		);
		this.overViewContainer.setAttribute(
			'data-canvas-width-state',
			this.canvasWidthState
		);

	initMutationObserver();
	setTimeout(startCustomControlProcess, 500);
  }

  public updateView(context: ComponentFramework.Context<IInputs>): void {
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

	startCustomControlProcess();
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



