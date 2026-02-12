import{j as r}from"./jsx-runtime-u17CrQMm.js";import{D as n}from"./button-DnZnbJNC.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";const{fn:s}=__STORYBOOK_MODULE_TEST__,p={title:"Components/DBButton/Width",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["outlined","brand","ghost","filled"]},disabled:{control:"boolean"},form:{control:"text"},name:{control:"text"},noText:{control:"boolean"},type:{control:"select",options:["button","reset","submit"]},value:{control:"text"},showIcon:{control:"boolean"},showIconLeading:{control:"boolean"},showIconTrailing:{control:"boolean"},width:{control:"select",options:["full","auto"]},size:{control:"select",options:["small","medium"]},text:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onClick:{action:"onClick"}}},o={args:{width:"auto",onClick:s(),children:"(Default) Auto"},render:e=>r.jsx(n,{...e})},t={args:{width:"full",onClick:s(),children:"Width"},render:e=>r.jsx("div",{style:{width:"500px"},children:r.jsx(n,{...e})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "auto",
    "onClick": fn(),
    "children": "(Default) Auto"
  },
  render: (properties: any) => <DBButton {...properties} />
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "full",
    "onClick": fn(),
    "children": "Width"
  },
  render: (properties: any) => <div style={{
    width: '500px'
  }}><DBButton {...properties} /></div>
}`,...t.parameters?.docs?.source}}};const u=["Auto","Full"];export{o as Auto,t as Full,u as __namedExportsOrder,p as default};
