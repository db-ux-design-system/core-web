import{j as t}from"./jsx-runtime-u17CrQMm.js";import{D as n}from"./tag-iW6KwDWA.js";import"./index-D2E5Z_bU.js";import"./iframe-CRg3iEU0.js";import"./preload-helper-DVaPbv4K.js";import"./constants-C-ysBZRi.js";import"./tooltip-e3vrO7_u.js";import"./document-scroll-listener-C9UMSkzw.js";import"./floating-components-DAXMbqch.js";const{fn:f}=__STORYBOOK_MODULE_TEST__,g={title:"Components/DBTag/Overflow",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{emphasis:{control:"select",options:["weak","strong"]},semantic:{control:"select",options:["adaptive","neutral","critical","informational","warning","successful"]},behavior:{control:"select",options:["static","removable"]},showIcon:{control:"boolean"},noText:{control:"boolean"},content:{control:"text"},showCheckState:{control:"boolean"},overflow:{control:"boolean"},removeButton:{control:"text"},text:{control:"text"},value:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onRemove:{action:"onRemove"}}},o={args:{children:"(Default) False"},render:r=>t.jsx(n,{...r})},e={args:{overflow:!0,children:t.jsx("span",{children:"True - lorem ipsum dolor"})},render:r=>t.jsx(n,{...r})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
