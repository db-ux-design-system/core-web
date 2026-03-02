import{j as r}from"./jsx-runtime-u17CrQMm.js";import{D as n}from"./tag-DvPX_ALl.js";import"./index-D2E5Z_bU.js";import"./iframe-D7o_mymi.js";import"./preload-helper-DYrPA5AR.js";import"./constants-C-ysBZRi.js";import"./tooltip-CDF_xP-m.js";import"./document-scroll-listener-C9UMSkzw.js";import"./floating-components-DAXMbqch.js";const{fn:x}=__STORYBOOK_MODULE_TEST__,f={title:"Components/DBTag/Show Slot",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{emphasis:{control:"select",options:["weak","strong"]},semantic:{control:"select",options:["adaptive","neutral","critical","informational","warning","successful"]},behavior:{control:"select",options:["static","removable"]},showIcon:{control:"boolean"},noText:{control:"boolean"},content:{control:"text"},showCheckState:{control:"boolean"},overflow:{control:"boolean"},removeButton:{control:"text"},text:{control:"text"},value:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onRemove:{action:"onRemove"}}},o={args:{children:"(Default) False"},render:t=>r.jsx(n,{...t})},e={args:{icon:"x_placeholder",content:r.jsx("div",{class:"default-content-slot",children:"Swap Slot"}),children:"True"},render:t=>r.jsx(n,{...t})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "children": "(Default) False"
  },
  render: (properties: any) => <DBTag {...properties} />
}`,...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "icon": "x_placeholder",
    "content": <div class="default-content-slot">Swap Slot</div>,
    "children": "True"
  },
  render: (properties: any) => <DBTag {...properties} />
}`,...e.parameters?.docs?.source}}};const g=["DefaultFalse","True"];export{o as DefaultFalse,e as True,g as __namedExportsOrder,f as default};
