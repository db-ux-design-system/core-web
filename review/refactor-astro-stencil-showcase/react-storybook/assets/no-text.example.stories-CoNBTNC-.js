import{j as n}from"./jsx-runtime-u17CrQMm.js";import{D as t}from"./tag-BseHWbl1.js";import"./index-20fQ7N7z.js";import"./iframe-D-PfmYcM.js";import"./preload-helper-DTBwH11z.js";import"./constants-CD69XpC7.js";import"./tooltip-BUPZbecD.js";import"./document-scroll-listener-Bcz2tjmG.js";import"./floating-components-BNmGdAgy.js";const{fn:x}=__STORYBOOK_MODULE_TEST__,T={title:"Components/DBTag/No Text",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{emphasis:{control:"select",options:["weak","strong"]},semantic:{control:"select",options:["adaptive","neutral","critical","informational","warning","successful"]},behavior:{control:"select",options:["static","removable"]},showIcon:{control:"boolean"},noText:{control:"boolean"},content:{control:"text"},showCheckState:{control:"boolean"},overflow:{control:"boolean"},removeButton:{control:"text"},text:{control:"text"},value:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onRemove:{action:"onRemove"}}},e={args:{icon:"x_placeholder",children:"(Default) False"},render:r=>n.jsx(t,{...r})},o={args:{icon:"x_placeholder",noText:!0,children:"True"},render:r=>n.jsx(t,{...r})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "icon": "x_placeholder",
    "children": "(Default) False"
  },
  render: (properties: any) => <DBTag {...properties} />
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "icon": "x_placeholder",
    "noText": true,
    "children": "True"
  },
  render: (properties: any) => <DBTag {...properties} />
}`,...o.parameters?.docs?.source}}};const g=["DefaultFalse","True"];export{e as DefaultFalse,o as True,g as __namedExportsOrder,T as default};
