import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as t}from"./custom-button-dtg8Hsil.js";import"./index-C0vvPcr0.js";import"./iframe-C0Q1XASu.js";import"./preload-helper-COTrxSA1.js";const{fn:g}=__STORYBOOK_MODULE_TEST__,y={title:"Components/DBCustomButton/Density",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["outlined","brand","ghost","filled"]},noText:{control:"boolean"},showIcon:{control:"boolean"},showIconLeading:{control:"boolean"},showIconTrailing:{control:"boolean"},width:{control:"select",options:["full","auto"]},size:{control:"select",options:["small","medium"]},id:{control:"text"},autofocus:{control:"boolean"}}},n={args:{"data-density":"functional",children:e.jsx("button",{type:"button",children:"Button"})},render:r=>e.jsx(t,{...r})},o={args:{"data-density":"functional",children:e.jsxs("label",{children:[e.jsx("input",{type:"checkbox"}),"Checkbox"]})},render:r=>e.jsx(t,{...r})},s={args:{"data-density":"functional",children:e.jsx("a",{href:"#",children:"Link"})},render:r=>e.jsx(t,{...r})},a={args:{"data-density":"regular",children:e.jsx("button",{type:"button",children:"Button"})},render:r=>e.jsx(t,{...r})},c={args:{"data-density":"regular",children:e.jsxs("label",{children:[e.jsx("input",{type:"checkbox"}),"Checkbox"]})},render:r=>e.jsx(t,{...r})},i={args:{"data-density":"regular",children:e.jsx("a",{href:"#",children:"Link"})},render:r=>e.jsx(t,{...r})},u={args:{"data-density":"expressive",children:e.jsx("button",{type:"button",children:"Button"})},render:r=>e.jsx(t,{...r})},d={args:{"data-density":"expressive",children:e.jsxs("label",{children:[e.jsx("input",{type:"checkbox"}),"Checkbox"]})},render:r=>e.jsx(t,{...r})},p={args:{"data-density":"expressive",children:e.jsx("a",{href:"#",children:"Link"})},render:r=>e.jsx(t,{...r})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "functional",
    "children": <button type="button">Button</button>
  },
  render: (properties: any) => <DBCustomButton {...properties} />
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "functional",
    "children": <label><input type="checkbox" />
                    Checkbox
                </label>
  },
  render: (properties: any) => <DBCustomButton {...properties} />
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "functional",
    "children": <a href="#">Link</a>
  },
  render: (properties: any) => <DBCustomButton {...properties} />
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "regular",
    "children": <button type="button">Button</button>
  },
  render: (properties: any) => <DBCustomButton {...properties} />
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "regular",
    "children": <label><input type="checkbox" />
                    Checkbox
                </label>
  },
  render: (properties: any) => <DBCustomButton {...properties} />
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "regular",
    "children": <a href="#">Link</a>
  },
  render: (properties: any) => <DBCustomButton {...properties} />
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "expressive",
    "children": <button type="button">Button</button>
  },
  render: (properties: any) => <DBCustomButton {...properties} />
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "expressive",
    "children": <label><input type="checkbox" />
                    Checkbox
                </label>
  },
  render: (properties: any) => <DBCustomButton {...properties} />
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "expressive",
    "children": <a href="#">Link</a>
  },
  render: (properties: any) => <DBCustomButton {...properties} />
}`,...p.parameters?.docs?.source}}};const B=["FunctionalButton","FunctionalCheckbox","FunctionalLink","DefaultRegularButton","DefaultRegularCheckbox","DefaultRegularLink","ExpressiveButton","ExpressiveCheckbox","ExpressiveLink"];export{a as DefaultRegularButton,c as DefaultRegularCheckbox,i as DefaultRegularLink,u as ExpressiveButton,d as ExpressiveCheckbox,p as ExpressiveLink,n as FunctionalButton,o as FunctionalCheckbox,s as FunctionalLink,B as __namedExportsOrder,y as default};
