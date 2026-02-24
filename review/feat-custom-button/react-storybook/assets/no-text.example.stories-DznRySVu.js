import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as o}from"./custom-button-M5yHkb9v.js";import"./index-C0vvPcr0.js";import"./iframe-BnaCtpDJ.js";import"./preload-helper-COTrxSA1.js";const{fn:x}=__STORYBOOK_MODULE_TEST__,m={title:"Components/DBCustomButton/No Text",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["outlined","brand","ghost","filled"]},noText:{control:"boolean"},wrap:{control:"boolean"},showIcon:{control:"boolean"},showIconLeading:{control:"boolean"},showIconTrailing:{control:"boolean"},width:{control:"select",options:["full","auto"]},size:{control:"select",options:["small","medium"]},id:{control:"text"},autofocus:{control:"boolean"}}},n={args:{icon:"x_placeholder",children:e.jsx("button",{type:"button",children:"Button"})},render:r=>e.jsx(o,{...r})},t={args:{icon:"x_placeholder",children:e.jsxs("label",{children:[e.jsx("input",{type:"checkbox"}),"Checkbox"]})},render:r=>e.jsx(o,{...r})},s={args:{icon:"x_placeholder",children:e.jsx("a",{href:"#",children:"Link"})},render:r=>e.jsx(o,{...r})},a={args:{icon:"x_placeholder",noText:!0,children:e.jsx("button",{type:"button",children:"Button"})},render:r=>e.jsx(o,{...r})},c={args:{icon:"x_placeholder",noText:!0,children:e.jsxs("label",{children:[e.jsx("input",{type:"checkbox"}),"Checkbox"]})},render:r=>e.jsx(o,{...r})},l={args:{icon:"x_placeholder",noText:!0,children:e.jsx("a",{href:"#",children:"Link"})},render:r=>e.jsx(o,{...r})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "icon": "x_placeholder",
    "children": <button type="button">Button</button>
  },
  render: (properties: any) => <DBCustomButton {...properties} />
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "icon": "x_placeholder",
    "children": <label><input type="checkbox" />
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
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "icon": "x_placeholder",
    "noText": true,
    "children": <button type="button">Button</button>
  },
  render: (properties: any) => <DBCustomButton {...properties} />
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "icon": "x_placeholder",
    "noText": true,
    "children": <label><input type="checkbox" />
                    Checkbox
                </label>
  },
  render: (properties: any) => <DBCustomButton {...properties} />
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "icon": "x_placeholder",
    "noText": true,
    "children": <a href="#">Link</a>
  },
  render: (properties: any) => <DBCustomButton {...properties} />
}`,...l.parameters?.docs?.source}}};const b=["DefaultFalseButton","DefaultFalseCheckbox","DefaultFalseLink","TrueButton","TrueCheckbox","TrueLink"];export{n as DefaultFalseButton,t as DefaultFalseCheckbox,s as DefaultFalseLink,a as TrueButton,c as TrueCheckbox,l as TrueLink,b as __namedExportsOrder,m as default};
