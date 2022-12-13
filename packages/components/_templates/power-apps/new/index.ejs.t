---
to: output/power-apps/<%= name %>/DB<%= h.capitalize(name) %>/index.ts
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
  private props: DB<%= h.capitalize(name) %>Props = {
  };

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
    if (currentPageContext) {
    <%  if(locals.props){ locals.props.forEach((prop)=>{ -%>
      this.props.<%= prop.name %> = currentPageContext.<%= prop.name %>;
    <% })} -%>
    }
    this.overViewContainer = container;
  }


  public updateView(context: ComponentFramework.Context<IInputs>): void {
    <%  if(locals.props){ locals.props.forEach((prop)=>{ -%>
    this.props.<%= prop.name %> = context.parameters.<%= prop.name %>.raw || undefined;
    <% })} -%>

    ReactDOM.render(
      React.createElement(DB<%= h.capitalize(name) %>React, this.props),
      this.overViewContainer
    );
  }

  public getOutputs(): IOutputs {
    return {
    <%  if(locals.props){ locals.props.forEach((prop)=>{ -%>
      <%= prop.name %>: this.props.<%= prop.name %>,
    <% })} -%>
    };
  }

  public destroy(): void {
    ReactDOM.unmountComponentAtNode(this.overViewContainer);
  }
}



