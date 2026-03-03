import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as s,a as n}from"./tab-list-xjnzEgRQ.js";import"./index-D2E5Z_bU.js";import"./iframe--WApKOfr.js";import"./preload-helper--tLyh50B.js";import"./tooltip-B1SfQ4Z8.js";import"./constants-C-ysBZRi.js";import"./document-scroll-listener-C9UMSkzw.js";import"./floating-components-DAXMbqch.js";const{fn:D}=__STORYBOOK_MODULE_TEST__,T={title:"Components/DBTabItem/Density",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text"},active:{control:"boolean"},disabled:{control:"boolean"},showIcon:{control:"boolean"},showIconLeading:{control:"boolean"},showIconTrailing:{control:"boolean"},noText:{control:"boolean"},id:{control:"text"},autofocus:{control:"boolean"}}},a={args:{label:"Functional"},render:r=>e.jsx(n,{"data-density":"functional",children:e.jsx(s,{...r})})},o={args:{label:"(Default) Regular"},render:r=>e.jsx(n,{children:e.jsx(s,{...r})})},t={args:{label:"Expressive"},render:r=>e.jsx(n,{"data-density":"expressive",children:e.jsx(s,{...r})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Functional"
  },
  render: (properties: any) => <DBTabList data-density="functional"><DBTabItem {...properties} /></DBTabList>
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "(Default) Regular"
  },
  render: (properties: any) => <DBTabList><DBTabItem {...properties} /></DBTabList>
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Expressive"
  },
  render: (properties: any) => <DBTabList data-density="expressive"><DBTabItem {...properties} /></DBTabList>
}`,...t.parameters?.docs?.source}}};const g=["Functional","DefaultRegular","Expressive"];export{o as DefaultRegular,t as Expressive,a as Functional,g as __namedExportsOrder,T as default};
