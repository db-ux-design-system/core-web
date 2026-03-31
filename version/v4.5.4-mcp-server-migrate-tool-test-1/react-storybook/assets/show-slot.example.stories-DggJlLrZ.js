import{j as r}from"./jsx-runtime-u17CrQMm.js";import{D as n}from"./tag-BqmiQFUm.js";import"./index-D2E5Z_bU.js";import"./iframe-B17vDKiL.js";import"./preload-helper-B3mKHU88.js";import"./constants-C-ysBZRi.js";import"./tooltip-D6POI3ol.js";import"./document-scroll-listener-C9UMSkzw.js";import"./floating-components-DAXMbqch.js";const{fn:a}=__STORYBOOK_MODULE_TEST__,g={title:"Components/DBTag/Show Slot",component:n,parameters:{layout:"centered"},tags:["autodocs"],args:{onRemove:a()},argTypes:{emphasis:{control:"select",options:["weak","strong"]},semantic:{control:"select",options:["adaptive","neutral","critical","informational","warning","successful"]},behavior:{control:"select",options:["static","removable"]},showIcon:{control:"boolean"},noText:{control:"boolean"},content:{control:"text"},showCheckState:{control:"boolean"},overflow:{control:"boolean"},removeButton:{control:"text"},text:{control:"text"},value:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onRemove:{action:"onRemove"}}},o={args:{children:"(Default) False"},render:t=>r.jsx(n,{...t})},e={args:{icon:"x_placeholder",content:r.jsx("div",{class:"default-content-slot",children:"Swap Slot"}),children:"True"},render:t=>r.jsx(n,{...t})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const f=["DefaultFalse","True"];export{o as DefaultFalse,e as True,f as __namedExportsOrder,g as default};
