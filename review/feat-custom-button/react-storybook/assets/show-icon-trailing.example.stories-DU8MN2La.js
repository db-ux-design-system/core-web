import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as o}from"./custom-button-dtg8Hsil.js";import"./index-C0vvPcr0.js";import"./iframe-C0Q1XASu.js";import"./preload-helper-COTrxSA1.js";const{fn:g}=__STORYBOOK_MODULE_TEST__,m={title:"Components/DBCustomButton/Show Icon Trailing",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["outlined","brand","ghost","filled"]},noText:{control:"boolean"},showIcon:{control:"boolean"},showIconLeading:{control:"boolean"},showIconTrailing:{control:"boolean"},width:{control:"select",options:["full","auto"]},size:{control:"select",options:["small","medium"]},id:{control:"text"},autofocus:{control:"boolean"}}},n={args:{iconTrailing:"x_placeholder",showIconTrailing:!1,children:e.jsx("button",{type:"button",children:"Button"})},render:r=>e.jsx(o,{...r})},t={args:{iconTrailing:"x_placeholder",showIconTrailing:!1,children:e.jsxs("label",{children:[e.jsx("input",{type:"checkbox"}),"Checkbox"]})},render:r=>e.jsx(o,{...r})},a={args:{iconTrailing:"x_placeholder",showIconTrailing:!1,children:e.jsx("a",{href:"#",children:"Link"})},render:r=>e.jsx(o,{...r})},s={args:{iconTrailing:"x_placeholder",showIconTrailing:!0,children:e.jsx("button",{type:"button",children:"Button"})},render:r=>e.jsx(o,{...r})},i={args:{iconTrailing:"x_placeholder",showIconTrailing:!0,children:e.jsxs("label",{children:[e.jsx("input",{type:"checkbox"}),"Checkbox"]})},render:r=>e.jsx(o,{...r})},c={args:{iconTrailing:"x_placeholder",showIconTrailing:!0,children:e.jsx("a",{href:"#",children:"Link"})},render:r=>e.jsx(o,{...r})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
    "children": <label><input type="checkbox" />
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
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    "iconTrailing": "x_placeholder",
    "showIconTrailing": true,
    "children": <label><input type="checkbox" />
                    Checkbox
                </label>
  },
  render: (properties: any) => <DBCustomButton {...properties} />
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "iconTrailing": "x_placeholder",
    "showIconTrailing": true,
    "children": <a href="#">Link</a>
  },
  render: (properties: any) => <DBCustomButton {...properties} />
}`,...c.parameters?.docs?.source}}};const x=["DefaultFalseButton","DefaultFalseCheckbox","DefaultFalseLink","TrueButton","TrueCheckbox","TrueLink"];export{n as DefaultFalseButton,t as DefaultFalseCheckbox,a as DefaultFalseLink,s as TrueButton,i as TrueCheckbox,c as TrueLink,x as __namedExportsOrder,m as default};
