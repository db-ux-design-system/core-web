import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as r}from"./custom-button-CrU8GxxW.js";import"./index-D2E5Z_bU.js";import"./iframe-BhiBouzR.js";import"./preload-helper-BHRuClfA.js";const{fn:x}=__STORYBOOK_MODULE_TEST__,m={title:"Components/DBCustomButton/No Text",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["outlined","brand","ghost","filled"]},noText:{control:"boolean"},wrap:{control:"boolean"},showIcon:{control:"boolean"},showIconLeading:{control:"boolean"},showIconTrailing:{control:"boolean"},width:{control:"select",options:["full","auto"]},size:{control:"select",options:["small","medium"]},id:{control:"text"},autofocus:{control:"boolean"}}},n={args:{icon:"x_placeholder",children:e.jsx("button",{type:"button",children:"Button"})},render:o=>e.jsx(r,{...o})},t={args:{icon:"x_placeholder",children:e.jsxs("label",{htmlFor:"checkbox11",children:[e.jsx("input",{type:"checkbox",id:"checkbox11"}),"Checkbox"]})},render:o=>e.jsx(r,{...o})},s={args:{icon:"x_placeholder",children:e.jsx("a",{href:"#",children:"Link"})},render:o=>e.jsx(r,{...o})},c={args:{icon:"x_placeholder",noText:!0,children:e.jsx("button",{type:"button",children:"Button"})},render:o=>e.jsx(r,{...o})},a={args:{icon:"x_placeholder",noText:!0,children:e.jsxs("label",{htmlFor:"checkbox12",children:[e.jsx("input",{type:"checkbox",id:"checkbox12"}),"Checkbox"]})},render:o=>e.jsx(r,{...o})},l={args:{icon:"x_placeholder",noText:!0,children:e.jsx("a",{href:"#",children:"Link"})},render:o=>e.jsx(r,{...o})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "icon": "x_placeholder",
    "children": <button type="button">Button</button>
  },
  render: (properties: any) => <DBCustomButton {...properties} />
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "icon": "x_placeholder",
    "children": <label htmlFor="checkbox11"><input type="checkbox" id="checkbox11" />
                    Checkbox
                </label>
  },
  render: (properties: any) => <DBCustomButton {...properties} />
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "icon": "x_placeholder",
    "children": <a href="#">Link</a>
  },
  render: (properties: any) => <DBCustomButton {...properties} />
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "icon": "x_placeholder",
    "noText": true,
    "children": <button type="button">Button</button>
  },
  render: (properties: any) => <DBCustomButton {...properties} />
}`,...c.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "icon": "x_placeholder",
    "noText": true,
    "children": <label htmlFor="checkbox12"><input type="checkbox" id="checkbox12" />
                    Checkbox
                </label>
  },
  render: (properties: any) => <DBCustomButton {...properties} />
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "icon": "x_placeholder",
    "noText": true,
    "children": <a href="#">Link</a>
  },
  render: (properties: any) => <DBCustomButton {...properties} />
}`,...l.parameters?.docs?.source}}};const b=["DefaultFalseButton","DefaultFalseCheckbox","DefaultFalseLink","TrueButton","TrueCheckbox","TrueLink"];export{n as DefaultFalseButton,t as DefaultFalseCheckbox,s as DefaultFalseLink,c as TrueButton,a as TrueCheckbox,l as TrueLink,b as __namedExportsOrder,m as default};
