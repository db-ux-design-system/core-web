import{j as a}from"./jsx-runtime-u17CrQMm.js";import{D as o}from"./badge-CYoxtLhE.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";import"./constants-CD69XpC7.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,u={title:"Components/DBBadge/Density",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{emphasis:{control:"select",options:["weak","strong"]},semantic:{control:"select",options:["adaptive","neutral","critical","informational","warning","successful"]},size:{control:"select",options:["small","medium"]},placement:{control:"select",options:["inline","corner-top-left","corner-top-right","corner-center-left","corner-center-right","corner-bottom-left","corner-bottom-right"]},label:{control:"text"},text:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"}}},r={args:{"data-density":"functional",children:"Functional"},render:e=>a.jsx(o,{...e})},t={args:{"data-density":"regular",children:"(Default) Regular"},render:e=>a.jsx(o,{...e})},n={args:{"data-density":"expressive",children:"Expressive"},render:e=>a.jsx(o,{...e})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "functional",
    "children": "Functional"
  },
  render: (properties: any) => <DBBadge {...properties} />
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "regular",
    "children": "(Default) Regular"
  },
  render: (properties: any) => <DBBadge {...properties} />
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "expressive",
    "children": "Expressive"
  },
  render: (properties: any) => <DBBadge {...properties} />
}`,...n.parameters?.docs?.source}}};const g=["Functional","DefaultRegular","Expressive"];export{t as DefaultRegular,n as Expressive,r as Functional,g as __namedExportsOrder,u as default};
