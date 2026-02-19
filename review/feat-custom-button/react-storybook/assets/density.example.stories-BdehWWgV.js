import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as n}from"./custom-button-gzkn4Nhi.js";import"./index-20fQ7N7z.js";import"./iframe-B14DFsEh.js";import"./preload-helper-COTrxSA1.js";const{fn:g}=__STORYBOOK_MODULE_TEST__,y={title:"Components/DBCustomButton/Density",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["outlined","brand","ghost","filled"]},disabled:{control:"boolean"},noText:{control:"boolean"},showIcon:{control:"boolean"},showIconLeading:{control:"boolean"},showIconTrailing:{control:"boolean"},width:{control:"select",options:["full","auto"]},size:{control:"select",options:["small","medium"]},id:{control:"text"},autofocus:{control:"boolean"}}},t={args:{"data-density":"functional",children:e.jsx("button",{children:"Button"})},render:r=>e.jsx(n,{...r})},o={args:{"data-density":"functional",children:e.jsxs("label",{children:[e.jsx("input",{type:"checkbox"}),"Checkbox"]})},render:r=>e.jsx(n,{...r})},s={args:{"data-density":"functional",children:e.jsx("a",{href:"#",children:"Link"})},render:r=>e.jsx(n,{...r})},a={args:{"data-density":"regular",children:e.jsx("button",{children:"Button"})},render:r=>e.jsx(n,{...r})},c={args:{"data-density":"regular",children:e.jsxs("label",{children:[e.jsx("input",{type:"checkbox"}),"Checkbox"]})},render:r=>e.jsx(n,{...r})},i={args:{"data-density":"regular",children:e.jsx("a",{href:"#",children:"Link"})},render:r=>e.jsx(n,{...r})},d={args:{"data-density":"expressive",children:e.jsx("button",{children:"Button"})},render:r=>e.jsx(n,{...r})},u={args:{"data-density":"expressive",children:e.jsxs("label",{children:[e.jsx("input",{type:"checkbox"}),"Checkbox"]})},render:r=>e.jsx(n,{...r})},l={args:{"data-density":"expressive",children:e.jsx("a",{href:"#",children:"Link"})},render:r=>e.jsx(n,{...r})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "functional",
    "children": <button>Button</button>
  },
  render: (properties: any) => <DBCustomButton {...properties} />
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
    "children": <button>Button</button>
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
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "expressive",
    "children": <button>Button</button>
  },
  render: (properties: any) => <DBCustomButton {...properties} />
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "expressive",
    "children": <label><input type="checkbox" />
                    Checkbox
                </label>
  },
  render: (properties: any) => <DBCustomButton {...properties} />
}`,...u.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "expressive",
    "children": <a href="#">Link</a>
  },
  render: (properties: any) => <DBCustomButton {...properties} />
}`,...l.parameters?.docs?.source}}};const B=["FunctionalButton","FunctionalCheckbox","FunctionalLink","DefaultRegularButton","DefaultRegularCheckbox","DefaultRegularLink","ExpressiveButton","ExpressiveCheckbox","ExpressiveLink"];export{a as DefaultRegularButton,c as DefaultRegularCheckbox,i as DefaultRegularLink,d as ExpressiveButton,u as ExpressiveCheckbox,l as ExpressiveLink,t as FunctionalButton,o as FunctionalCheckbox,s as FunctionalLink,B as __namedExportsOrder,y as default};
