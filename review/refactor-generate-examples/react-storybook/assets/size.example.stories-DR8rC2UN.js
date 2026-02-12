import{j as n}from"./jsx-runtime-u17CrQMm.js";import{D as o}from"./badge-CYoxtLhE.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";import"./constants-CD69XpC7.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,d={title:"Components/DBBadge/Size",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{emphasis:{control:"select",options:["weak","strong"]},semantic:{control:"select",options:["adaptive","neutral","critical","informational","warning","successful"]},size:{control:"select",options:["small","medium"]},placement:{control:"select",options:["inline","corner-top-left","corner-top-right","corner-center-left","corner-center-right","corner-bottom-left","corner-bottom-right"]},label:{control:"text"},text:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"}}},e={args:{children:"(Default) Small"},render:t=>n.jsx(o,{...t})},r={args:{size:"medium",children:"Medium"},render:t=>n.jsx(o,{...t})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "children": "(Default) Small"
  },
  render: (properties: any) => <DBBadge {...properties} />
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "medium",
    "children": "Medium"
  },
  render: (properties: any) => <DBBadge {...properties} />
}`,...r.parameters?.docs?.source}}};const u=["DefaultSmall","Medium"];export{e as DefaultSmall,r as Medium,u as __namedExportsOrder,d as default};
