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
  private componentHeight: number;
  private componentWidth: number;

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
		this.props.<%= prop.name %> = currentPageContext.<%= prop.name %>;
		<% }) -%>
    }
	<% } -%>
	this._notifyOutputChanged = notifyOutputChanged;
    this.overViewContainer = container;
  }


  public updateView(context: ComponentFramework.Context<IInputs>): void {
    <%  if(locals.props){ locals.props.forEach((prop)=>{ -%>
    this.props.<%= prop.name %> = context.parameters.<%= prop.name %>.raw || undefined;
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
	if (this.overViewContainer.offsetHeight !== this.componentHeight) {
		this.componentHeight = this.overViewContainer.offsetHeight;
		shouldUpdate = true;
	}
	if (this.overViewContainer.offsetWidth !== this.componentWidth) {
		this.componentWidth = this.overViewContainer.offsetWidth;
		shouldUpdate = true;
	}
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
    componentHeight: this.overViewContainer.offsetHeight,
    componentWidth: this.overViewContainer.offsetWidth,
    };
  }

  public destroy(): void {
    ReactDOM.unmountComponentAtNode(this.overViewContainer);
  }
}



