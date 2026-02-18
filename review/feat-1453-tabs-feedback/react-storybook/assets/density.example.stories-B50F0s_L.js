import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as s,a as n}from"./tab-list-BcVYfyS1.js";import"./index-cGbbigiG.js";import"./iframe-DxmR2ASF.js";import"./preload-helper--tLyh50B.js";import"./tooltip-C6ZFnIHC.js";import"./constants-CD69XpC7.js";import"./document-scroll-listener-BixpNV2P.js";import"./floating-components-BNmGdAgy.js";const{fn:x}=__STORYBOOK_MODULE_TEST__,D={title:"Components/DBTabItem/Density",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text"},active:{control:"boolean"},disabled:{control:"boolean"},showIcon:{control:"boolean"},showIconLeading:{control:"boolean"},showIconTrailing:{control:"boolean"},noText:{control:"boolean"},id:{control:"text"},autofocus:{control:"boolean"}}},a={args:{"data-density":"functional",label:"Functional"},render:r=>e.jsx(n,{children:e.jsx(s,{...r})})},o={args:{"data-density":"regular",label:"(Default) Regular"},render:r=>e.jsx(n,{children:e.jsx(s,{...r})})},t={args:{"data-density":"expressive",label:"Expressive"},render:r=>e.jsx(n,{children:e.jsx(s,{...r})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "functional",
    "label": "Functional"
  },
  render: (properties: any) => <DBTabList><DBTabItem {...properties} /></DBTabList>
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "regular",
    "label": "(Default) Regular"
  },
  render: (properties: any) => <DBTabList><DBTabItem {...properties} /></DBTabList>
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "expressive",
    "label": "Expressive"
  },
  render: (properties: any) => <DBTabList><DBTabItem {...properties} /></DBTabList>
}`,...t.parameters?.docs?.source}}};const T=["Functional","DefaultRegular","Expressive"];export{o as DefaultRegular,t as Expressive,a as Functional,T as __namedExportsOrder,D as default};
