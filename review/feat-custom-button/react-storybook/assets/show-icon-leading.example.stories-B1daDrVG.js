import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as r}from"./custom-button-CeIm1sh0.js";import"./index-C0vvPcr0.js";import"./iframe-B-fAFiKC.js";import"./preload-helper-COTrxSA1.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,x={title:"Components/DBCustomButton/Show Icon Leading",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["outlined","brand","ghost","filled"]},noText:{control:"boolean"},wrap:{control:"boolean"},showIcon:{control:"boolean"},showIconLeading:{control:"boolean"},showIconTrailing:{control:"boolean"},width:{control:"select",options:["full","auto"]},size:{control:"select",options:["small","medium"]},id:{control:"text"},autofocus:{control:"boolean"}}},n={args:{icon:"x_placeholder",showIcon:!1,children:e.jsx("button",{type:"button",children:"Button"})},render:o=>e.jsx(r,{...o})},t={args:{icon:"x_placeholder",showIcon:!1,children:e.jsxs("label",{children:[e.jsx("input",{type:"checkbox"}),"Checkbox"]})},render:o=>e.jsx(r,{...o})},s={args:{icon:"x_placeholder",showIcon:!1,children:e.jsx("a",{href:"#",children:"Link"})},render:o=>e.jsx(r,{...o})},a={args:{icon:"x_placeholder",showIcon:!0,children:e.jsx("button",{type:"button",children:"Button"})},render:o=>e.jsx(r,{...o})},c={args:{icon:"x_placeholder",showIcon:!0,children:e.jsxs("label",{children:[e.jsx("input",{type:"checkbox"}),"Checkbox"]})},render:o=>e.jsx(r,{...o})},l={args:{icon:"x_placeholder",showIcon:!0,children:e.jsx("a",{href:"#",children:"Link"})},render:o=>e.jsx(r,{...o})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "icon": "x_placeholder",
    "showIcon": false,
    "children": <button type="button">Button</button>
  },
  render: (properties: any) => <DBCustomButton {...properties} />
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "icon": "x_placeholder",
    "showIcon": false,
    "children": <label><input type="checkbox" />
                    Checkbox
                </label>
  },
  render: (properties: any) => <DBCustomButton {...properties} />
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "icon": "x_placeholder",
    "showIcon": false,
    "children": <a href="#">Link</a>
  },
  render: (properties: any) => <DBCustomButton {...properties} />
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "icon": "x_placeholder",
    "showIcon": true,
    "children": <button type="button">Button</button>
  },
  render: (properties: any) => <DBCustomButton {...properties} />
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "icon": "x_placeholder",
    "showIcon": true,
    "children": <label><input type="checkbox" />
                    Checkbox
                </label>
  },
  render: (properties: any) => <DBCustomButton {...properties} />
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "icon": "x_placeholder",
    "showIcon": true,
    "children": <a href="#">Link</a>
  },
  render: (properties: any) => <DBCustomButton {...properties} />
}`,...l.parameters?.docs?.source}}};const b=["DefaultFalseButton","DefaultFalseCheckbox","DefaultFalseLink","TrueButton","TrueCheckbox","TrueLink"];export{n as DefaultFalseButton,t as DefaultFalseCheckbox,s as DefaultFalseLink,a as TrueButton,c as TrueCheckbox,l as TrueLink,b as __namedExportsOrder,x as default};
