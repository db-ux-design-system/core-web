import{j as s}from"./jsx-runtime-u17CrQMm.js";import{D as o}from"./infotext-CZi0xQss.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,p={title:"Components/DBInfotext/Size",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{semantic:{control:"select",options:["adaptive","neutral","critical","informational","warning","successful"]},size:{control:"select",options:["small","medium"]},showIcon:{control:"boolean"},text:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"}}},e={args:{children:"(Default) Medium"},render:t=>s.jsx(o,{...t})},r={args:{size:"small",children:"Small"},render:t=>s.jsx(o,{...t})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "children": "(Default) Medium"
  },
  render: (properties: any) => <DBInfotext {...properties} />
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "small",
    "children": "Small"
  },
  render: (properties: any) => <DBInfotext {...properties} />
}`,...r.parameters?.docs?.source}}};const d=["DefaultMedium","Small"];export{e as DefaultMedium,r as Small,d as __namedExportsOrder,p as default};
