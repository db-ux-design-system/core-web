import{j as a}from"./jsx-runtime-u17CrQMm.js";import{D as t}from"./button-B-LSsBs2.js";import"./index-D2E5Z_bU.js";import"./iframe-DwOpbq5K.js";import"./preload-helper-j823Xs5Z.js";const{fn:s}=__STORYBOOK_MODULE_TEST__,u={title:"Components/DBButton/Density",component:t,parameters:{layout:"centered"},tags:["autodocs"],args:{onClick:s()},argTypes:{variant:{control:"select",options:["outlined","brand","ghost","filled"]},disabled:{control:"boolean"},form:{control:"text"},name:{control:"text"},noText:{control:"boolean"},wrap:{control:"boolean"},type:{control:"select",options:["button","reset","submit"]},value:{control:"text"},showIcon:{control:"boolean"},showIconLeading:{control:"boolean"},showIconTrailing:{control:"boolean"},width:{control:"select",options:["full","auto"]},size:{control:"select",options:["small","medium"]},text:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onClick:{action:"onClick"}}},o={args:{"data-density":"functional",onClick:s(),children:"Functional"},render:e=>a.jsx(t,{...e})},n={args:{"data-density":"regular",onClick:s(),children:"(Default) Regular"},render:e=>a.jsx(t,{...e})},r={args:{"data-density":"expressive",onClick:s(),children:"Expressive"},render:e=>a.jsx(t,{...e})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "functional",
    "onClick": fn(),
    "children": "Functional"
  },
  render: (properties: any) => <DBButton {...properties} />
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "regular",
    "onClick": fn(),
    "children": "(Default) Regular"
  },
  render: (properties: any) => <DBButton {...properties} />
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "expressive",
    "onClick": fn(),
    "children": "Expressive"
  },
  render: (properties: any) => <DBButton {...properties} />
}`,...r.parameters?.docs?.source}}};const m=["Functional","Regular","Expressive"];export{r as Expressive,o as Functional,n as Regular,m as __namedExportsOrder,u as default};
