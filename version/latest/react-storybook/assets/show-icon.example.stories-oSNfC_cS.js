import{j as n}from"./jsx-runtime-u17CrQMm.js";import{D as t}from"./tag-CtXFlHRF.js";import"./index-C0vvPcr0.js";import"./iframe-bSjRYqH6.js";import"./preload-helper-CkzXfqio.js";import"./constants-C-ysBZRi.js";import"./tooltip--nfVcvN7.js";import"./document-scroll-listener-C19Ex2M_.js";import"./floating-components-BNmGdAgy.js";const{fn:h}=__STORYBOOK_MODULE_TEST__,x={title:"Components/DBTag/Show Icon",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{emphasis:{control:"select",options:["weak","strong"]},semantic:{control:"select",options:["adaptive","neutral","critical","informational","warning","successful"]},behavior:{control:"select",options:["static","removable"]},showIcon:{control:"boolean"},noText:{control:"boolean"},content:{control:"text"},showCheckState:{control:"boolean"},overflow:{control:"boolean"},removeButton:{control:"text"},text:{control:"text"},value:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onRemove:{action:"onRemove"}}},o={args:{icon:"x_placeholder",showIcon:!1,children:"(Default) False"},render:r=>n.jsx(t,{...r})},e={args:{icon:"x_placeholder",showIcon:!0,children:"True"},render:r=>n.jsx(t,{...r})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "icon": "x_placeholder",
    "showIcon": false,
    "children": "(Default) False"
  },
  render: (properties: any) => <DBTag {...properties} />
}`,...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "icon": "x_placeholder",
    "showIcon": true,
    "children": "True"
  },
  render: (properties: any) => <DBTag {...properties} />
}`,...e.parameters?.docs?.source}}};const f=["DefaultFalse","True"];export{o as DefaultFalse,e as True,f as __namedExportsOrder,x as default};
