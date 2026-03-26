import{j as n}from"./jsx-runtime-u17CrQMm.js";import{D as r}from"./tag-gYwuKoqC.js";import"./index-B7He6KvY.js";import"./iframe-Dz5uaCij.js";import"./preload-helper-B33QiPj0.js";import"./constants-C-ysBZRi.js";import"./tooltip-MUiMgpq6.js";import"./document-scroll-listener-tWgnathf.js";import"./floating-components-DAXMbqch.js";const{fn:a}=__STORYBOOK_MODULE_TEST__,x={title:"Components/DBTag/Emphasis",component:r,parameters:{layout:"centered"},tags:["autodocs"],args:{onRemove:a()},argTypes:{emphasis:{control:"select",options:["weak","strong"]},semantic:{control:"select",options:["adaptive","neutral","critical","informational","warning","successful"]},behavior:{control:"select",options:["static","removable"]},showIcon:{control:"boolean"},noText:{control:"boolean"},content:{control:"text"},showCheckState:{control:"boolean"},overflow:{control:"boolean"},removeButton:{control:"text"},text:{control:"text"},value:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onRemove:{action:"onRemove"}}},o={args:{children:"(Default) Weak"},render:t=>n.jsx(r,{...t})},e={args:{emphasis:"strong",children:"Strong"},render:t=>n.jsx(r,{...t})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "children": "(Default) Weak"
  },
  render: (properties: any) => <DBTag {...properties} />
}`,...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "emphasis": "strong",
    "children": "Strong"
  },
  render: (properties: any) => <DBTag {...properties} />
}`,...e.parameters?.docs?.source}}};const f=["DefaultWeak","Strong"];export{o as DefaultWeak,e as Strong,f as __namedExportsOrder,x as default};
