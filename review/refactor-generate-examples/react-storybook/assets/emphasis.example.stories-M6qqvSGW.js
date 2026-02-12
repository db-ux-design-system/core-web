import{j as n}from"./jsx-runtime-u17CrQMm.js";import{D as o}from"./badge-CYoxtLhE.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";import"./constants-CD69XpC7.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,d={title:"Components/DBBadge/Emphasis",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{emphasis:{control:"select",options:["weak","strong"]},semantic:{control:"select",options:["adaptive","neutral","critical","informational","warning","successful"]},size:{control:"select",options:["small","medium"]},placement:{control:"select",options:["inline","corner-top-left","corner-top-right","corner-center-left","corner-center-right","corner-bottom-left","corner-bottom-right"]},label:{control:"text"},text:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"}}},e={args:{children:"(Default) Weak"},render:t=>n.jsx(o,{...t})},r={args:{emphasis:"strong",children:"Strong"},render:t=>n.jsx(o,{...t})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "children": "(Default) Weak"
  },
  render: (properties: any) => <DBBadge {...properties} />
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    "emphasis": "strong",
    "children": "Strong"
  },
  render: (properties: any) => <DBBadge {...properties} />
}`,...r.parameters?.docs?.source}}};const g=["DefaultWeak","Strong"];export{e as DefaultWeak,r as Strong,g as __namedExportsOrder,d as default};
