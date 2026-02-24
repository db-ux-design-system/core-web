import{j as t}from"./jsx-runtime-u17CrQMm.js";import{D as n}from"./tag-CtXFlHRF.js";import"./index-C0vvPcr0.js";import"./iframe-bSjRYqH6.js";import"./preload-helper-CkzXfqio.js";import"./constants-C-ysBZRi.js";import"./tooltip--nfVcvN7.js";import"./document-scroll-listener-C19Ex2M_.js";import"./floating-components-BNmGdAgy.js";const{fn:f}=__STORYBOOK_MODULE_TEST__,g={title:"Components/DBTag/Overflow",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{emphasis:{control:"select",options:["weak","strong"]},semantic:{control:"select",options:["adaptive","neutral","critical","informational","warning","successful"]},behavior:{control:"select",options:["static","removable"]},showIcon:{control:"boolean"},noText:{control:"boolean"},content:{control:"text"},showCheckState:{control:"boolean"},overflow:{control:"boolean"},removeButton:{control:"text"},text:{control:"text"},value:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onRemove:{action:"onRemove"}}},o={args:{children:"(Default) False"},render:r=>t.jsx(n,{...r})},e={args:{overflow:!0,children:t.jsx("span",{children:"True - lorem ipsum dolor"})},render:r=>t.jsx(n,{...r})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "children": "(Default) False"
  },
  render: (properties: any) => <DBTag {...properties} />
}`,...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "overflow": true,
    "children": <span>True - lorem ipsum dolor</span>
  },
  render: (properties: any) => <DBTag {...properties} />
}`,...e.parameters?.docs?.source}}};const x=["DefaultFalse","True"];export{o as DefaultFalse,e as True,x as __namedExportsOrder,g as default};
