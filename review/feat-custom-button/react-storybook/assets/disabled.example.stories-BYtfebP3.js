import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as t}from"./custom-button-dtg8Hsil.js";import"./index-C0vvPcr0.js";import"./iframe-C0Q1XASu.js";import"./preload-helper-COTrxSA1.js";const{fn:b}=__STORYBOOK_MODULE_TEST__,h={title:"Components/DBCustomButton/Disabled",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["outlined","brand","ghost","filled"]},noText:{control:"boolean"},showIcon:{control:"boolean"},showIconLeading:{control:"boolean"},showIconTrailing:{control:"boolean"},width:{control:"select",options:["full","auto"]},size:{control:"select",options:["small","medium"]},id:{control:"text"},autofocus:{control:"boolean"}}},o={args:{children:e.jsx("button",{type:"button",children:"Button"})},render:r=>e.jsx(t,{...r})},n={args:{children:e.jsxs("label",{children:[e.jsx("input",{type:"checkbox"}),"Checkbox"]})},render:r=>e.jsx(t,{...r})},s={args:{children:e.jsx("a",{href:"#",children:"Link"})},render:r=>e.jsx(t,{...r})},a={args:{children:e.jsx("button",{type:"button",disabled:!0,children:"Button"})},render:r=>e.jsx(t,{...r})},c={args:{children:e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",disabled:!0}),"Checkbox"]})},render:r=>e.jsx(t,{...r})},i={args:{children:e.jsx("a",{href:"#","aria-disabled":"true",tabIndex:-1,children:"Link"})},render:r=>e.jsx(t,{...r})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "children": <button type="button">Button</button>
  },
  render: (properties: any) => <DBCustomButton {...properties} />
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "children": <label><input type="checkbox" />
                    Checkbox
                </label>
  },
  render: (properties: any) => <DBCustomButton {...properties} />
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "children": <a href="#">Link</a>
  },
  render: (properties: any) => <DBCustomButton {...properties} />
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "children": <button type="button" disabled>
                    Button
                </button>
  },
  render: (properties: any) => <DBCustomButton {...properties} />
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "children": <label><input type="checkbox" disabled />
                    Checkbox
                </label>
  },
  render: (properties: any) => <DBCustomButton {...properties} />
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    "children": <a href="#" aria-disabled="true" tabIndex={-1}>
                    Link
                </a>
  },
  render: (properties: any) => <DBCustomButton {...properties} />
}`,...i.parameters?.docs?.source}}};const x=["DefaultFalseButton","DefaultFalseCheckbox","DefaultFalseLink","TrueButton","TrueCheckbox","TrueLink"];export{o as DefaultFalseButton,n as DefaultFalseCheckbox,s as DefaultFalseLink,a as TrueButton,c as TrueCheckbox,i as TrueLink,x as __namedExportsOrder,h as default};
