import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as s,a as n}from"./tab-list-Ds39TYNU.js";import"./index-D2E5Z_bU.js";import"./iframe-CBMtbObL.js";import"./preload-helper--tLyh50B.js";import"./tooltip-DaYClLkW.js";import"./document-scroll-listener-C9UMSkzw.js";import"./floating-components-DAXMbqch.js";const{fn:D}=__STORYBOOK_MODULE_TEST__,T={title:"Components/DBTabItem/States",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text"},active:{control:"boolean"},disabled:{control:"boolean"},showIcon:{control:"boolean"},showIconLeading:{control:"boolean"},showIconTrailing:{control:"boolean"},noText:{control:"boolean"},id:{control:"text"},autofocus:{control:"boolean"}}},r={args:{label:"(Default) Enabled"},render:a=>e.jsx(n,{children:e.jsx(s,{...a})})},o={args:{label:"active",active:!0},render:a=>e.jsx(n,{children:e.jsx(s,{...a})})},t={args:{label:"disabled",disabled:!0},render:a=>e.jsx(n,{children:e.jsx(s,{...a})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const g=["DefaultEnabled","active","disabled"];export{r as DefaultEnabled,g as __namedExportsOrder,o as active,T as default,t as disabled};
