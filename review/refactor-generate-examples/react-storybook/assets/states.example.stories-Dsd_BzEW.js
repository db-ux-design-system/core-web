import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as s,a as n}from"./tab-list-CmpYvehF.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,m={title:"Components/DBTabItem/States",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text"},active:{control:"boolean"},disabled:{control:"boolean"},showIcon:{control:"boolean"},showIconLeading:{control:"boolean"},showIconTrailing:{control:"boolean"},noText:{control:"boolean"},checked:{control:"boolean"},name:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"}}},r={args:{label:"(Default) Enabled"},render:a=>e.jsx(n,{children:e.jsx(s,{...a})})},o={args:{label:"active",active:!0},render:a=>e.jsx(n,{children:e.jsx(s,{...a})})},t={args:{label:"disabled",disabled:!0},render:a=>e.jsx(n,{children:e.jsx(s,{...a})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "(Default) Enabled"
  },
  render: (properties: any) => <DBTabList><DBTabItem {...properties} /></DBTabList>
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "active",
    "active": true
  },
  render: (properties: any) => <DBTabList><DBTabItem {...properties} /></DBTabList>
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "disabled",
    "disabled": true
  },
  render: (properties: any) => <DBTabList><DBTabItem {...properties} /></DBTabList>
}`,...t.parameters?.docs?.source}}};const u=["DefaultEnabled","active","disabled"];export{r as DefaultEnabled,u as __namedExportsOrder,o as active,m as default,t as disabled};
