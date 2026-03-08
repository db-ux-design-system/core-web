import{j as s}from"./jsx-runtime-u17CrQMm.js";import{D as e}from"./button-B3gJE3R1.js";import"./index-D2E5Z_bU.js";import"./iframe-CiUFPK1z.js";import"./preload-helper-BVVqbGQe.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,m={title:"Components/DBButton/Variant",component:e,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["outlined","brand","ghost","filled"]},disabled:{control:"boolean"},form:{control:"text"},name:{control:"text"},noText:{control:"boolean"},wrap:{control:"boolean"},type:{control:"select",options:["button","reset","submit"]},value:{control:"text"},showIcon:{control:"boolean"},showIconLeading:{control:"boolean"},showIconTrailing:{control:"boolean"},width:{control:"select",options:["full","auto"]},size:{control:"select",options:["small","medium"]},text:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onClick:{action:"onClick"}}},r={args:{variant:"outlined",onClick:i(),children:"(Default) Outlined - Adaptive"},render:o=>s.jsx(e,{...o})},n={args:{variant:"filled",onClick:i(),children:"Filled - Adaptive"},render:o=>s.jsx(e,{...o})},t={args:{variant:"ghost",onClick:i(),children:"Ghost - Adaptive"},render:o=>s.jsx(e,{...o})},a={args:{variant:"brand",onClick:i(),children:"Brand"},render:o=>s.jsx(e,{...o})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "outlined",
    "onClick": fn(),
    "children": "(Default) Outlined - Adaptive"
  },
  render: (properties: any) => <DBButton {...properties} />
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "filled",
    "onClick": fn(),
    "children": "Filled - Adaptive"
  },
  render: (properties: any) => <DBButton {...properties} />
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "ghost",
    "onClick": fn(),
    "children": "Ghost - Adaptive"
  },
  render: (properties: any) => <DBButton {...properties} />
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "brand",
    "onClick": fn(),
    "children": "Brand"
  },
  render: (properties: any) => <DBButton {...properties} />
}`,...a.parameters?.docs?.source}}};const g=["Outlined","Filled","Ghost","Brand"];export{a as Brand,n as Filled,t as Ghost,r as Outlined,g as __namedExportsOrder,m as default};
