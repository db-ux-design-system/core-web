import{j as n}from"./jsx-runtime-u17CrQMm.js";import{D as r}from"./tag-B4CEGkGx.js";import"./index-cGbbigiG.js";import"./iframe-ConIbFlu.js";import"./preload-helper-DYzpNvQY.js";import"./constants-C-ysBZRi.js";import"./tooltip-6QzCZ2vl.js";import"./document-scroll-listener-BixpNV2P.js";import"./floating-components-BNmGdAgy.js";const{fn:g}=__STORYBOOK_MODULE_TEST__,x={title:"Components/DBTag/Emphasis",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{emphasis:{control:"select",options:["weak","strong"]},semantic:{control:"select",options:["adaptive","neutral","critical","informational","warning","successful"]},behavior:{control:"select",options:["static","removable"]},showIcon:{control:"boolean"},noText:{control:"boolean"},content:{control:"text"},showCheckState:{control:"boolean"},overflow:{control:"boolean"},removeButton:{control:"text"},text:{control:"text"},value:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onRemove:{action:"onRemove"}}},o={args:{children:"(Default) Weak"},render:t=>n.jsx(r,{...t})},e={args:{emphasis:"strong",children:"Strong"},render:t=>n.jsx(r,{...t})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
