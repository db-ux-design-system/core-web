import{j as r}from"./jsx-runtime-u17CrQMm.js";import{D as n}from"./button-DnZnbJNC.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";const{fn:s}=__STORYBOOK_MODULE_TEST__,d={title:"Components/DBButton/Size",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["outlined","brand","ghost","filled"]},disabled:{control:"boolean"},form:{control:"text"},name:{control:"text"},noText:{control:"boolean"},type:{control:"select",options:["button","reset","submit"]},value:{control:"text"},showIcon:{control:"boolean"},showIconLeading:{control:"boolean"},showIconTrailing:{control:"boolean"},width:{control:"select",options:["full","auto"]},size:{control:"select",options:["small","medium"]},text:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onClick:{action:"onClick"}}},o={args:{size:"medium",onClick:s(),children:"(Default) Medium"},render:t=>r.jsx(n,{...t})},e={args:{size:"small",onClick:s(),children:"Small"},render:t=>r.jsx(n,{...t})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "medium",
    "onClick": fn(),
    "children": "(Default) Medium"
  },
  render: (properties: any) => <DBButton {...properties} />
}`,...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "small",
    "onClick": fn(),
    "children": "Small"
  },
  render: (properties: any) => <DBButton {...properties} />
}`,...e.parameters?.docs?.source}}};const p=["Medium","Small"];export{o as Medium,e as Small,p as __namedExportsOrder,d as default};
