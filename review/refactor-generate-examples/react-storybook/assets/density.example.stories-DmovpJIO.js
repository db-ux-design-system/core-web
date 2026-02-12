import{j as a}from"./jsx-runtime-u17CrQMm.js";import{D as s}from"./infotext-CZi0xQss.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,u={title:"Components/DBInfotext/Density",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{semantic:{control:"select",options:["adaptive","neutral","critical","informational","warning","successful"]},size:{control:"select",options:["small","medium"]},showIcon:{control:"boolean"},text:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"}}},r={args:{"data-density":"functional",children:"Functional"},render:e=>a.jsx(s,{...e})},t={args:{"data-density":"regular",children:"(Default) Regular"},render:e=>a.jsx(s,{...e})},n={args:{"data-density":"expressive",children:"Expressive"},render:e=>a.jsx(s,{...e})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "functional",
    "children": "Functional"
  },
  render: (properties: any) => <DBInfotext {...properties} />
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "regular",
    "children": "(Default) Regular"
  },
  render: (properties: any) => <DBInfotext {...properties} />
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "expressive",
    "children": "Expressive"
  },
  render: (properties: any) => <DBInfotext {...properties} />
}`,...n.parameters?.docs?.source}}};const m=["Functional","DefaultRegular","Expressive"];export{t as DefaultRegular,n as Expressive,r as Functional,m as __namedExportsOrder,u as default};
