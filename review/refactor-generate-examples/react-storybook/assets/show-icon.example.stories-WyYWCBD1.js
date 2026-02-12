import{j as s}from"./jsx-runtime-u17CrQMm.js";import{D as t}from"./infotext-CZi0xQss.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,m={title:"Components/DBInfotext/Show Icon",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{semantic:{control:"select",options:["adaptive","neutral","critical","informational","warning","successful"]},size:{control:"select",options:["small","medium"]},showIcon:{control:"boolean"},text:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"}}},e={args:{showIcon:!0,children:"(Default) True"},render:r=>s.jsx(t,{...r})},o={args:{showIcon:!1,children:"False"},render:r=>s.jsx(t,{...r})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "showIcon": true,
    "children": "(Default) True"
  },
  render: (properties: any) => <DBInfotext {...properties} />
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "showIcon": false,
    "children": "False"
  },
  render: (properties: any) => <DBInfotext {...properties} />
}`,...o.parameters?.docs?.source}}};const u=["DefaultTrue","False"];export{e as DefaultTrue,o as False,u as __namedExportsOrder,m as default};
