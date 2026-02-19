import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as o}from"./custom-button-gzkn4Nhi.js";import"./index-20fQ7N7z.js";import"./iframe-B14DFsEh.js";import"./preload-helper-COTrxSA1.js";const{fn:b}=__STORYBOOK_MODULE_TEST__,h={title:"Components/DBCustomButton/Disabled",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["outlined","brand","ghost","filled"]},disabled:{control:"boolean"},noText:{control:"boolean"},showIcon:{control:"boolean"},showIconLeading:{control:"boolean"},showIconTrailing:{control:"boolean"},width:{control:"select",options:["full","auto"]},size:{control:"select",options:["small","medium"]},id:{control:"text"},autofocus:{control:"boolean"}}},t={args:{disabled:!1,children:e.jsx("button",{children:"Button"})},render:r=>e.jsx(o,{...r})},n={args:{disabled:!1,children:e.jsxs("label",{children:[e.jsx("input",{type:"checkbox"}),"Checkbox"]})},render:r=>e.jsx(o,{...r})},s={args:{disabled:!1,children:e.jsx("a",{href:"#",children:"Link"})},render:r=>e.jsx(o,{...r})},a={args:{disabled:!0,children:e.jsx("button",{children:"Button"})},render:r=>e.jsx(o,{...r})},c={args:{disabled:!0,children:e.jsxs("label",{children:[e.jsx("input",{type:"checkbox"}),"Checkbox"]})},render:r=>e.jsx(o,{...r})},l={args:{disabled:!0,children:e.jsx("a",{href:"#",children:"Link"})},render:r=>e.jsx(o,{...r})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "disabled": false,
    "children": <button>Button</button>
  },
  render: (properties: any) => <DBCustomButton {...properties} />
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "disabled": false,
    "children": <label><input type="checkbox" />
                    Checkbox
                </label>
  },
  render: (properties: any) => <DBCustomButton {...properties} />
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "disabled": false,
    "children": <a href="#">Link</a>
  },
  render: (properties: any) => <DBCustomButton {...properties} />
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "disabled": true,
    "children": <button>Button</button>
  },
  render: (properties: any) => <DBCustomButton {...properties} />
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "disabled": true,
    "children": <label><input type="checkbox" />
                    Checkbox
                </label>
  },
  render: (properties: any) => <DBCustomButton {...properties} />
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "disabled": true,
    "children": <a href="#">Link</a>
  },
  render: (properties: any) => <DBCustomButton {...properties} />
}`,...l.parameters?.docs?.source}}};const x=["DefaultFalseButton","DefaultFalseCheckbox","DefaultFalseLink","TrueButton","TrueCheckbox","TrueLink"];export{t as DefaultFalseButton,n as DefaultFalseCheckbox,s as DefaultFalseLink,a as TrueButton,c as TrueCheckbox,l as TrueLink,x as __namedExportsOrder,h as default};
