import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as s,a as n}from"./tab-list-DgFM_tgF.js";import"./index-C0vvPcr0.js";import"./iframe-b0wCSa2v.js";import"./preload-helper--tLyh50B.js";import"./tooltip-DdqTwzHP.js";import"./constants-C-ysBZRi.js";import"./document-scroll-listener-C19Ex2M_.js";import"./floating-components-BNmGdAgy.js";const{fn:T}=__STORYBOOK_MODULE_TEST__,g={title:"Components/DBTabItem/States",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text"},active:{control:"boolean"},disabled:{control:"boolean"},showIcon:{control:"boolean"},showIconLeading:{control:"boolean"},showIconTrailing:{control:"boolean"},noText:{control:"boolean"},id:{control:"text"},autofocus:{control:"boolean"}}},a={args:{label:"(Default) Enabled"},render:r=>e.jsx(n,{children:e.jsx(s,{...r})})},o={args:{label:"active",active:!0},render:r=>e.jsx(n,{children:e.jsx(s,{...r})})},t={args:{label:"disabled",disabled:!0},render:r=>e.jsx(n,{children:e.jsx(s,{...r})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "(Default) Enabled"
  },
  render: (properties: any) => <DBTabList><DBTabItem {...properties} /></DBTabList>
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const x=["DefaultEnabled","active","disabled"];export{a as DefaultEnabled,x as __namedExportsOrder,o as active,g as default,t as disabled};
