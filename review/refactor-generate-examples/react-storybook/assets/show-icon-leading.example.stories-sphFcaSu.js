import{j as r}from"./jsx-runtime-u17CrQMm.js";import{D as t}from"./button-DnZnbJNC.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";const{fn:s}=__STORYBOOK_MODULE_TEST__,d={title:"Components/DBButton/Show Icon Leading",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["outlined","brand","ghost","filled"]},disabled:{control:"boolean"},form:{control:"text"},name:{control:"text"},noText:{control:"boolean"},type:{control:"select",options:["button","reset","submit"]},value:{control:"text"},showIcon:{control:"boolean"},showIconLeading:{control:"boolean"},showIconTrailing:{control:"boolean"},width:{control:"select",options:["full","auto"]},size:{control:"select",options:["small","medium"]},text:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onClick:{action:"onClick"}}},o={args:{icon:"x_placeholder",onClick:s(),showIcon:!1,children:"(Default) False"},render:n=>r.jsx(t,{...n})},e={args:{icon:"x_placeholder",onClick:s(),showIcon:!0,children:"True"},render:n=>r.jsx(t,{...n})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "icon": "x_placeholder",
    "onClick": fn(),
    "showIcon": false,
    "children": "(Default) False"
  },
  render: (properties: any) => <DBButton {...properties} />
}`,...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "icon": "x_placeholder",
    "onClick": fn(),
    "showIcon": true,
    "children": "True"
  },
  render: (properties: any) => <DBButton {...properties} />
}`,...e.parameters?.docs?.source}}};const u=["False","True"];export{o as False,e as True,u as __namedExportsOrder,d as default};
