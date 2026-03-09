import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as r}from"./custom-button-B3dpJuFC.js";import"./index-D2E5Z_bU.js";import"./iframe-BmelxiHM.js";import"./preload-helper-DsSMDcLp.js";const{fn:h}=__STORYBOOK_MODULE_TEST__,b={title:"Components/DBCustomButton/Size",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["outlined","brand","ghost","filled"]},noText:{control:"boolean"},wrap:{control:"boolean"},showIcon:{control:"boolean"},showIconLeading:{control:"boolean"},showIconTrailing:{control:"boolean"},width:{control:"select",options:["full","auto"]},size:{control:"select",options:["small","medium"]},id:{control:"text"},autofocus:{control:"boolean"}}},t={args:{size:"medium",children:e.jsx("button",{type:"button",children:"Button"})},render:o=>e.jsx(r,{...o})},n={args:{size:"medium",children:e.jsxs("label",{htmlFor:"checkbox17",children:[e.jsx("input",{type:"checkbox",id:"checkbox17"}),"Checkbox"]})},render:o=>e.jsx(r,{...o})},s={args:{size:"medium",children:e.jsx("a",{href:"#",children:"Link"})},render:o=>e.jsx(r,{...o})},a={args:{size:"small",children:e.jsx("button",{type:"button",children:"Button"})},render:o=>e.jsx(r,{...o})},c={args:{size:"small",children:e.jsxs("label",{htmlFor:"checkbox18",children:[e.jsx("input",{type:"checkbox",id:"checkbox18"}),"Checkbox"]})},render:o=>e.jsx(r,{...o})},i={args:{size:"small",children:e.jsx("a",{href:"#",children:"Link"})},render:o=>e.jsx(r,{...o})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "medium",
    "children": <button type="button">Button</button>
  },
  render: (properties: any) => <DBCustomButton {...properties} />
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "medium",
    "children": <label htmlFor="checkbox17"><input type="checkbox" id="checkbox17" />
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
    "children": <label htmlFor="checkbox18"><input type="checkbox" id="checkbox18" />
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
