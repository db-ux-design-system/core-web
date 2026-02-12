import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as s,a as n}from"./tab-list-CmpYvehF.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,u={title:"Components/DBTabItem/Density",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text"},active:{control:"boolean"},disabled:{control:"boolean"},showIcon:{control:"boolean"},showIconLeading:{control:"boolean"},showIconTrailing:{control:"boolean"},noText:{control:"boolean"},checked:{control:"boolean"},name:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"}}},r={args:{"data-density":"functional",label:"Functional"},render:a=>e.jsx(n,{children:e.jsx(s,{...a})})},o={args:{"data-density":"regular",label:"(Default) Regular"},render:a=>e.jsx(n,{children:e.jsx(s,{...a})})},t={args:{"data-density":"expressive",label:"Expressive"},render:a=>e.jsx(n,{children:e.jsx(s,{...a})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "functional",
    "label": "Functional"
  },
  render: (properties: any) => <DBTabList><DBTabItem {...properties} /></DBTabList>
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const b=["Functional","DefaultRegular","Expressive"];export{o as DefaultRegular,t as Expressive,r as Functional,b as __namedExportsOrder,u as default};
