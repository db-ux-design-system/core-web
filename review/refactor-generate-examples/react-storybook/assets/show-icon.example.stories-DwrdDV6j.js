import{j as n}from"./jsx-runtime-u17CrQMm.js";import{D as t}from"./tag-Bwjb1ZJJ.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";import"./constants-CD69XpC7.js";import"./tooltip-COrPM-Vv.js";import"./document-scroll-listener-BixpNV2P.js";import"./floating-components-BNmGdAgy.js";const{fn:h}=__STORYBOOK_MODULE_TEST__,x={title:"Components/DBTag/Show Icon",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{emphasis:{control:"select",options:["weak","strong"]},semantic:{control:"select",options:["adaptive","neutral","critical","informational","warning","successful"]},behavior:{control:"select",options:["static","removable"]},showIcon:{control:"boolean"},noText:{control:"boolean"},content:{control:"text"},showCheckState:{control:"boolean"},overflow:{control:"boolean"},removeButton:{control:"text"},text:{control:"text"},value:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onRemove:{action:"onRemove"}}},o={args:{icon:"x_placeholder",showIcon:!1,children:"(Default) False"},render:r=>n.jsx(t,{...r})},e={args:{icon:"x_placeholder",showIcon:!0,children:"True"},render:r=>n.jsx(t,{...r})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
