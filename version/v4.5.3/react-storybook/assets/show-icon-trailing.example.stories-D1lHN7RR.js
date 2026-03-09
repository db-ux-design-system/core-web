import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as r}from"./custom-button-B3dpJuFC.js";import"./index-D2E5Z_bU.js";import"./iframe-BmelxiHM.js";import"./preload-helper-DsSMDcLp.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,x={title:"Components/DBCustomButton/Show Icon Trailing",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["outlined","brand","ghost","filled"]},noText:{control:"boolean"},wrap:{control:"boolean"},showIcon:{control:"boolean"},showIconLeading:{control:"boolean"},showIconTrailing:{control:"boolean"},width:{control:"select",options:["full","auto"]},size:{control:"select",options:["small","medium"]},id:{control:"text"},autofocus:{control:"boolean"}}},n={args:{iconTrailing:"x_placeholder",showIconTrailing:!1,children:e.jsx("button",{type:"button",children:"Button"})},render:o=>e.jsx(r,{...o})},t={args:{iconTrailing:"x_placeholder",showIconTrailing:!1,children:e.jsxs("label",{htmlFor:"checkbox15",children:[e.jsx("input",{type:"checkbox",id:"checkbox15"}),"Checkbox"]})},render:o=>e.jsx(r,{...o})},a={args:{iconTrailing:"x_placeholder",showIconTrailing:!1,children:e.jsx("a",{href:"#",children:"Link"})},render:o=>e.jsx(r,{...o})},s={args:{iconTrailing:"x_placeholder",showIconTrailing:!0,children:e.jsx("button",{type:"button",children:"Button"})},render:o=>e.jsx(r,{...o})},c={args:{iconTrailing:"x_placeholder",showIconTrailing:!0,children:e.jsxs("label",{htmlFor:"checkbox16",children:[e.jsx("input",{type:"checkbox",id:"checkbox16"}),"Checkbox"]})},render:o=>e.jsx(r,{...o})},i={args:{iconTrailing:"x_placeholder",showIconTrailing:!0,children:e.jsx("a",{href:"#",children:"Link"})},render:o=>e.jsx(r,{...o})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "iconTrailing": "x_placeholder",
    "showIconTrailing": false,
    "children": <button type="button">Button</button>
  },
  render: (properties: any) => <DBCustomButton {...properties} />
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "iconTrailing": "x_placeholder",
    "showIconTrailing": false,
    "children": <label htmlFor="checkbox15"><input type="checkbox" id="checkbox15" />
                    Checkbox
                </label>
  },
  render: (properties: any) => <DBCustomButton {...properties} />
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "iconTrailing": "x_placeholder",
    "showIconTrailing": false,
    "children": <a href="#">Link</a>
  },
  render: (properties: any) => <DBCustomButton {...properties} />
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "iconTrailing": "x_placeholder",
    "showIconTrailing": true,
    "children": <button type="button">Button</button>
  },
  render: (properties: any) => <DBCustomButton {...properties} />
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "iconTrailing": "x_placeholder",
    "showIconTrailing": true,
    "children": <label htmlFor="checkbox16"><input type="checkbox" id="checkbox16" />
                    Checkbox
                </label>
  },
  render: (properties: any) => <DBCustomButton {...properties} />
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    "iconTrailing": "x_placeholder",
    "showIconTrailing": true,
    "children": <a href="#">Link</a>
  },
  render: (properties: any) => <DBCustomButton {...properties} />
}`,...i.parameters?.docs?.source}}};const g=["DefaultFalseButton","DefaultFalseCheckbox","DefaultFalseLink","TrueButton","TrueCheckbox","TrueLink"];export{n as DefaultFalseButton,t as DefaultFalseCheckbox,a as DefaultFalseLink,s as TrueButton,c as TrueCheckbox,i as TrueLink,g as __namedExportsOrder,x as default};
