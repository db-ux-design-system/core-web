import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as o}from"./custom-button-CeIm1sh0.js";import"./index-C0vvPcr0.js";import"./iframe-B-fAFiKC.js";import"./preload-helper-COTrxSA1.js";const{fn:h}=__STORYBOOK_MODULE_TEST__,b={title:"Components/DBCustomButton/Size",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["outlined","brand","ghost","filled"]},noText:{control:"boolean"},wrap:{control:"boolean"},showIcon:{control:"boolean"},showIconLeading:{control:"boolean"},showIconTrailing:{control:"boolean"},width:{control:"select",options:["full","auto"]},size:{control:"select",options:["small","medium"]},id:{control:"text"},autofocus:{control:"boolean"}}},t={args:{size:"medium",children:e.jsx("button",{type:"button",children:"Button"})},render:r=>e.jsx(o,{...r})},n={args:{size:"medium",children:e.jsxs("label",{children:[e.jsx("input",{type:"checkbox"}),"Checkbox"]})},render:r=>e.jsx(o,{...r})},s={args:{size:"medium",children:e.jsx("a",{href:"#",children:"Link"})},render:r=>e.jsx(o,{...r})},a={args:{size:"small",children:e.jsx("button",{type:"button",children:"Button"})},render:r=>e.jsx(o,{...r})},c={args:{size:"small",children:e.jsxs("label",{children:[e.jsx("input",{type:"checkbox"}),"Checkbox"]})},render:r=>e.jsx(o,{...r})},i={args:{size:"small",children:e.jsx("a",{href:"#",children:"Link"})},render:r=>e.jsx(o,{...r})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "medium",
    "children": <button type="button">Button</button>
  },
  render: (properties: any) => <DBCustomButton {...properties} />
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "medium",
    "children": <label><input type="checkbox" />
                    Checkbox
                </label>
  },
  render: (properties: any) => <DBCustomButton {...properties} />
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "medium",
    "children": <a href="#">Link</a>
  },
  render: (properties: any) => <DBCustomButton {...properties} />
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "small",
    "children": <button type="button">Button</button>
  },
  render: (properties: any) => <DBCustomButton {...properties} />
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "small",
    "children": <label><input type="checkbox" />
                    Checkbox
                </label>
  },
  render: (properties: any) => <DBCustomButton {...properties} />
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "small",
    "children": <a href="#">Link</a>
  },
  render: (properties: any) => <DBCustomButton {...properties} />
}`,...i.parameters?.docs?.source}}};const x=["DefaultMediumButton","DefaultMediumCheckbox","DefaultMediumLink","SmallButton","SmallCheckbox","SmallLink"];export{t as DefaultMediumButton,n as DefaultMediumCheckbox,s as DefaultMediumLink,a as SmallButton,c as SmallCheckbox,i as SmallLink,x as __namedExportsOrder,b as default};
