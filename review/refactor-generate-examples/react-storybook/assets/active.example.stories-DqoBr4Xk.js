import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as a}from"./navigation-item-CgYwv9u5.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";import"./constants-CD69XpC7.js";import"./floating-components-BNmGdAgy.js";import"./button-DnZnbJNC.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,x={title:"Components/DBNavigationItem/Active",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{disabled:{control:"boolean"},active:{control:"boolean"},showIcon:{control:"boolean"},width:{control:"select",options:["full","auto"]},wrap:{control:"boolean"},text:{control:"text"},subNavigationExpanded:{control:"boolean"},backButtonId:{control:"text"},backButtonText:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onClick:{action:"onClick"}}},o={args:{active:!1,children:e.jsx("a",{href:"#",children:"(Default) False"})},render:t=>e.jsx("ul",{children:e.jsx(a,{...t})})},r={args:{active:!0,children:e.jsx("a",{href:"#",children:"True"})},render:t=>e.jsx("ul",{children:e.jsx(a,{...t})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "active": false,
    "children": <a href="#">(Default) False</a>
  },
  render: (properties: any) => <ul><DBNavigationItem {...properties} /></ul>
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    "active": true,
    "children": <a href="#">True</a>
  },
  render: (properties: any) => <ul><DBNavigationItem {...properties} /></ul>
}`,...r.parameters?.docs?.source}}};const f=["DefaultFalse","True"];export{o as DefaultFalse,r as True,f as __namedExportsOrder,x as default};
