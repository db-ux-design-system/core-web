import{j as i}from"./jsx-runtime-u17CrQMm.js";import{D as e}from"./button-Cu1m3lzY.js";import"./index-D2E5Z_bU.js";import"./iframe-D0Rqs9UN.js";import"./preload-helper-aOBw0osJ.js";const{fn:r}=__STORYBOOK_MODULE_TEST__,m={title:"Components/DBButton/Variant",component:e,parameters:{layout:"centered"},tags:["autodocs"],args:{onClick:r()},argTypes:{variant:{control:"select",options:["outlined","brand","ghost","filled"]},disabled:{control:"boolean"},form:{control:"text"},name:{control:"text"},noText:{control:"boolean"},wrap:{control:"boolean"},type:{control:"select",options:["button","reset","submit"]},value:{control:"text"},showIcon:{control:"boolean"},showIconLeading:{control:"boolean"},showIconTrailing:{control:"boolean"},width:{control:"select",options:["full","auto"]},size:{control:"select",options:["small","medium"]},text:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onClick:{action:"onClick"}}},n={args:{variant:"outlined",onClick:r(),children:"(Default) Outlined - Adaptive"},render:o=>i.jsx(e,{...o})},t={args:{variant:"filled",onClick:r(),children:"Filled - Adaptive"},render:o=>i.jsx(e,{...o})},a={args:{variant:"ghost",onClick:r(),children:"Ghost - Adaptive"},render:o=>i.jsx(e,{...o})},s={args:{variant:"brand",onClick:r(),children:"Brand"},render:o=>i.jsx(e,{...o})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "outlined",
    "onClick": fn(),
    "children": "(Default) Outlined - Adaptive"
  },
  render: (properties: any) => <DBButton {...properties} />
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "filled",
    "onClick": fn(),
    "children": "Filled - Adaptive"
  },
  render: (properties: any) => <DBButton {...properties} />
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "ghost",
    "onClick": fn(),
    "children": "Ghost - Adaptive"
  },
  render: (properties: any) => <DBButton {...properties} />
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "brand",
    "onClick": fn(),
    "children": "Brand"
  },
  render: (properties: any) => <DBButton {...properties} />
}`,...s.parameters?.docs?.source}}};const g=["Outlined","Filled","Ghost","Brand"];export{s as Brand,t as Filled,a as Ghost,n as Outlined,g as __namedExportsOrder,m as default};
