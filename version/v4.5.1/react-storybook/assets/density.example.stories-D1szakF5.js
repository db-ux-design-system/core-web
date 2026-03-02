import{j as a}from"./jsx-runtime-u17CrQMm.js";import{D as n}from"./tag-DvPX_ALl.js";import"./index-D2E5Z_bU.js";import"./iframe-D7o_mymi.js";import"./preload-helper-DYrPA5AR.js";import"./constants-C-ysBZRi.js";import"./tooltip-CDF_xP-m.js";import"./document-scroll-listener-C9UMSkzw.js";import"./floating-components-DAXMbqch.js";const{fn:x}=__STORYBOOK_MODULE_TEST__,f={title:"Components/DBTag/Density",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{emphasis:{control:"select",options:["weak","strong"]},semantic:{control:"select",options:["adaptive","neutral","critical","informational","warning","successful"]},behavior:{control:"select",options:["static","removable"]},showIcon:{control:"boolean"},noText:{control:"boolean"},content:{control:"text"},showCheckState:{control:"boolean"},overflow:{control:"boolean"},removeButton:{control:"text"},text:{control:"text"},value:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onRemove:{action:"onRemove"}}},r={args:{"data-density":"functional",children:"Functional"},render:e=>a.jsx(n,{...e})},o={args:{"data-density":"regular",children:"(Default) Regular"},render:e=>a.jsx(n,{...e})},t={args:{"data-density":"expressive",children:"Expressive"},render:e=>a.jsx(n,{...e})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "functional",
    "children": "Functional"
  },
  render: (properties: any) => <DBTag {...properties} />
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "regular",
    "children": "(Default) Regular"
  },
  render: (properties: any) => <DBTag {...properties} />
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "expressive",
    "children": "Expressive"
  },
  render: (properties: any) => <DBTag {...properties} />
}`,...t.parameters?.docs?.source}}};const v=["Functional","DefaultRegular","Expressive"];export{o as DefaultRegular,t as Expressive,r as Functional,v as __namedExportsOrder,f as default};
